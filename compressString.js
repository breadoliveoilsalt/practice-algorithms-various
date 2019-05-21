// The encryption problem from GS
// This is CTCI's solution

// NOTE the technique of strting the counting at the start of the loop!

function compressString(str) {

  let output = ""

  let charCount = 0

  for (let i = 0; i < str.length; i++) {

    charCount += 1

    if ( str[i] != str[i+1] || i === str.length - 1 ) {
      output += `${str[i]}${charCount}`
      charCount = 0
    }
  }

  return output

  // or test: return output.length < str.length ? output : str

}
