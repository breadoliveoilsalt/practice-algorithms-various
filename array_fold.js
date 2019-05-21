let arr = [1,2,3,4,5,6,7,8,9]
// to fold basically means you divide array in 2, put elements on top of each other, and add the two into a new array.
// if the array is odd, the middle one comes first, meaning basically you did this:
// [0,1,2,3,4] plus
// [5,6,7,8,9] equals
// [5,7,9,11,13]

//  fold twice:
// [9, 16, 20]

// n is the amount of times you fold.  Bloomberg guys did not want recursive

let arr2 = [0,2,4,8,6,4]

function foldArray(arr, n) {

  for (let i = 0; i < n; i++) {

    let newArr = []

    let midPoint = Math.floor(arr.length/2)

    let oddFactor = 0

    if (arr.length % 2 != 0) {
      newArr.push(arr[midPoint])
      oddFactor = 1
    }

    for (let j = 0; j < midPoint; j++) {
      let newNum = arr[j] + arr[j + midPoint + oddFactor]
      newArr.push(newNum)
    }

    arr = newArr // Imp lesson here: I can do this
  }

  return arr

}
