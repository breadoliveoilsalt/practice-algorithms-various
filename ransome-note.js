////////////////////////////////////////////////////////////////////////////////

// Random note problem practice:


function checkMagazine(magazine, note) {
    let wordCount = {}
    // assumes no punctuation
    // editor will not accept .split() for some reason
    let wordArr = turnStringToArray(magazine)
    let noteArr = turnStringToArray(note)

    wordArr.forEach(function (word) {
        if (wordCount[word]) {
            wordCount[word] += 1
        } else {
            wordCount[word] = 1
        }
    })

    for (let i = 0; i < noteArr.length; i++) {
        let word = noteArr[i]
        if (wordCount[word]) {
            wordCount[word] -= 1
        } else if (!wordCount[word] || wordCount[word] === 0) {
            return "No"
        }
    }

    return "Yes"
}
function turnStringToArray(str) {
    let stringArray = []

    let wordIndexStart = 0

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === " " || i === str.length) {
            // debugger
            // let wordLength = i - wordIndexStart
            let word = str.slice(wordIndexStart, i)
            stringArray.push(word)
            wordIndexStart = i + 1
        }
    }
    return stringArray
}

// Below works, but tester will not accept .split
// function checkMagazine(magazine, note) {
//     let wordCount = {}
//         // assumes no punctuation
//     let wordArr = magazine.split(" ")
//     let noteArr = note.split(" ")
//
//     wordArr.forEach(function (word) {
//         if (wordCount[word]) {
//             wordCount[word] += 1
//         } else {
//             wordCount[word] = 1
//         }
//     })
//
//     for (let i = 0; i < noteArr.length; i++) {
//       let word = noteArr[i]
//       if (wordCount[word]) {
//           wordCount[word] -= 1
//       } else if (!wordCount[word] || wordCount[word] === 0) {
//           return "No"
//       }
//     }
//
//     return "Yes"
      // This words to get to the `else if` statement, but `return` is not working
      // for some reason.  checkMagazine still returns "Yes".  Maybe this is b/c
      // the call back is only returning from itself.
      // Lesson: use a regular `for` loop
    // noteArr.forEach(function(word) {
    //     if (wordCount[word]) {
    //         wordCount[word] -= 1
    //     } else if (!wordCount[word] || wordCount[word] === 0) {
    //         debugger
    //         return "No"
    //     }
    // })

    // return "Yes"
// }

let mag1 = "two times three is not four"
let note1 = "two times two is four"

let mag2 = "ive got a lovely bunch of coconuts"
let note2 = "ive got some coconuts"
