
// Works

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let midpoint = Math.floor(arr.length/2)
  let leftSide = arr.slice(0, midpoint) // note I am passing these below by reference, and they get widdled away into new arr.
  let rightSide = arr.slice(midpoint)
  return merge(mergeSort(leftSide), mergeSort(rightSide))
}

function merge(leftSide, rightSide) {
  let mergedArr = []

  while (leftSide.length != 0 && rightSide.length != 0) {
    if (leftSide[0] < rightSide[0]) {
      mergedArr.push(leftSide.shift())
    } else {
      mergedArr.push(rightSide.shift())
    }
  }

  return mergedArr.concat(leftSide).concat(rightSide)
}
