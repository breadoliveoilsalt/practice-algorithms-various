/*
- This is from Pramp
- Set variables for
  result = ""
  unique character count
  count map
  head index = 0
- Initialize map with each letter in arr, and set count to 0
- Iterate through string with index being tail index
  - If count map does not have arr[tailIndex], continue...we only care about noting when our iterator is going over a character in arr
  - if count map has arr[tailIndex], if count is 0, then unique character count ++, and then update count map
  - have a while loop -> while unique character count == arr.length
    - if length of window === length of arr, then return the substring

- update this. <= DONE - SEE BELOW



- Major lesson here:
  - the charMap plus uniqueCounter keep you from having to iterate through array each time
    - you need the countMap to tell you whether the uniqueCharCount should go up or down.
    - and you need the uniqueCharCounter to know whether your substring is good or not.
    - move tail, check if you've got something unique
    - while you've got all the characters in the array (ie, while uniqueCharCount === arr.length), then you can examine head, test if moving it should downgrade uniqueCharCount (by looking at Map), and then move head

  - This is all about how to look for a list in a string

***  See refactored code below!
*/

let arr = ['x','y','z']
let str = "xyyzyzyx"


// ----------------
// CODE I REFACTORED AND SIMPLIFIED - works!
// ----------------

function getShortestSubstring2(arr, str) {
  let headIndex = 0
  let uniqueCounter = 0               // counts whether all the characters in arr are present in current substring
  let countMap = {}

  let output = ""

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i]
    countMap[char] = 0
  }

  for (let tailIndex = 0; tailIndex < str.length; tailIndex++) {
    let tailChar = str[tailIndex]

    if (countMap[tailChar] !== undefined) {
      if (countMap[tailChar] === 0) {
        uniqueCounter += 1
      }
      countMap[tailChar] += 1
    }

    while (uniqueCounter === arr.length) {          // once you've got all the necessary characters,
                                                    // see if you've hit jackpot and short circuit, or adjust output
      let tempLength = tailIndex - headIndex + 1    // Then, start moving headIndex and testing what you've got in while loop
      if (tempLength === arr.length) {
        output = str.substring(headIndex, tailIndex + 1)
        return output
      }

      if (output > tempLength || output === "") {
        output = str.substring(headIndex, tailIndex + 1)
      }

      let headChar = str[headIndex]
      if (countMap[headChar] !== undefined) {
        if (countMap[headChar] === 1) {
          uniqueCounter -= 1
        }
        countMap[headChar] -= 1
      }

      headIndex += 1
    }

  }

  return output
}

// ----------------
// PRIOR VERSION OF CODE ABOVE. LESS UNIFORM:
// ----------------

/*
function getShortestSubstring1(arr, str) {
  let headIndex = 0
  let uniqueCounter = 0               // counts whether all the characters in arr are present in current substring
  let countMap = {}

  let output = ""

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i]
    countMap[char] = 0
  }

  // console.log(`CountMap: ${countMap}`) - confirmed countMap works

  for (let tailIndex = 0; tailIndex < str.length; tailIndex++) {
    let tailChar = str[tailIndex]

    console.log(`
      tailChar: ${tailChar},
      head: ${headIndex},
      uniqueCounter: ${uniqueCounter},
      `
    )
    // FOR LATER: CONSIDER REVISING THIS SO THAT IT MIRRORS CODE IN WHILE LOOP -- IE, IF TAILCHAR IS IN HASH MAP, THEN DO THIS STUFF
    // if (!countMap[tailChar]) { // THIS IS 'TRUE' IN JS WHEN COUNT IS 0!! THE INVERSE OF FALSE. SO A BIG BUG.

    if (countMap[tailChar] === undefined) { // need this be 0 is falsey in JS!
      continue                          // b/c we only char about characters in the arr
    }

    let tailCount = countMap[tailChar]
    if (tailCount === 0) {
      uniqueCounter += 1
    }
    countMap[tailChar] += 1

    while (uniqueCounter === arr.length) {          // once you've got all the necessary characters,
                                                    // see if you've hit jackpot and short circuit, or adjust output
      let tempLength = tailIndex - headIndex + 1    // Then, start moving headIndex and testing what you've got in while loop

      if (tempLength === arr.length) {
        output = str.substring(headIndex, tailIndex + 1)
        return output
      }

      if (output > tempLength || output === "") {
        output = str.substring(headIndex, tailIndex + 1)
        debugger
      }

      let headChar = str[headIndex]
      if (countMap[headChar] !== undefined) {
        if (countMap[headChar] === 1) {
          uniqueCounter -= 1
        }
        countMap[headChar] -= 1
      }

      headIndex += 1
    }

  }

  return output
}

*/
