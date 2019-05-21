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


// ----------------
// REFACTORING CODE ABOVE - works!
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

/*

// in future: see if you can update for comparing two strings.  See here:
https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/

The java:
public class GFG
{
    static final int no_of_chars = 256;

    // Function to find smallest window containing
    // all characters of 'pat'
    static String findSubString(String str, String pat)
    {
        int len1 = str.length();
        int len2 = pat.length();

        // check if string's length is less than pattern's
        // length. If yes then no such window can exist
        if (len1 < len2)
        {
            System.out.println("No such window exists");
            return "";
        }

        int hash_pat[] = new int[no_of_chars];
        int hash_str[] = new int[no_of_chars];

        // store occurrence ofs characters of pattern
        for (int i = 0; i < len2; i++)
            hash_pat[pat.charAt(i)]++;

        int start = 0, start_index = -1, min_len = Integer.MAX_VALUE;

        // start traversing the string
        int count = 0; // count of characters
        for (int j = 0; j < len1 ; j++)
        {
            // count occurrence of characters of string
            hash_str[str.charAt(j)]++;

            // If string's char matches with pattern's char
            // then increment count
            if (hash_pat[str.charAt(j)] != 0 &&
                hash_str[str.charAt(j)] <= hash_pat[str.charAt(j)] )
                count++;

            // if all the characters are matched
            if (count == len2)
            {
                // Try to minimize the window i.e., check if
                // any character is occurring more no. of times
                // than its occurrence in pattern, if yes
                // then remove it from starting and also remove
                // the useless characters.
                while ( hash_str[str.charAt(start)] > hash_pat[str.charAt(start)]
                    || hash_pat[str.charAt(start)] == 0)
                {

                    if (hash_str[str.charAt(start)] > hash_pat[str.charAt(start)])
                        hash_str[str.charAt(start)]--;
                    start++;
                }

                // update window size
                int len_window = j - start + 1;
                if (min_len > len_window)
                {
                    min_len = len_window;
                    start_index = start;
                }
            }
        }

        // If no window found
        if (start_index == -1)
        {
        System.out.println("No such window exists");
        return "";
        }

        // Return substring starting from start_index
        // and length min_len
        return str.substring(start_index, start_index + min_len);
    }

*/

function getShortestSubstring3(longString, shortString) {

  let start = 0
  let startIndex = -1
  let minLength = Number.POSITIVE_INFINITY
  let uniqueCount = 0

  let shortStringCountMap = {}
  let longStringCountMap = {}

  for (let i = 0; i < shortString.length; i++) {
    shortStringCountMap[shortString[i]] = 0
  }

  for (let j = 0; j < longString.length; j++) {

    // strategy is to increase count if count in short string is see if your window

    if (longStringCountMap[longString[j]] === undefined) {
      longStringCountMap[longString[j]] = 1
    } else {
      longStringCountMap[longString[j]] += 1
    }




  }

  for (let j = 0; j < longString.length; j++) {
    longStringCountMap[shortString[i]] = 0
  }

}
