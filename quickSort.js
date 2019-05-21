/*

very helpful: https://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort

- Note: left and right are indices.  So left and right are set to 0 and arr.length-1 originally
- the pivot value here is the right most value
- The whole process here is basically
  - Pick a pivot value.
  - Call parition to put the pivot value in it's proper place and put everything less than pivot to the left and everything greater than pivot to the right of it.
  - Divide and conquer

- This performs in-place
- This is recursive similar to mergeSort

- Note!
  - three functions needed (vs mergeSort's 2)
  - three arguments needed (vs mergeSort's 1 & 2)
  - Big O:
      - WORST CASE: n^2
      - AVERAGE CASE: n log n
      - GENERAL PERFORMACE: better than n log n, so better than mergeSort
      - Memory: log n (vs MergeSort's n)

- This works:

*/

function quickSort(arr, left, right) {
  if (left < right) {
    let properPivotIndex = partition(arr, left, right)
    quickSort(arr, left, properPivotIndex - 1)
    quickSort(arr, properPivotIndex + 1, right)
  }
  return arr
}

function partition(arr, left, right) { // This should really be setPivot, but partition seems standard practice
  let pivotValue = arr[right]
  let testPivotIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, testPivotIndex)
      testPivotIndex += 1
    }
  }
  swap(arr, right, testPivotIndex) // This is to finally put the pivot in its' proper place, and why i < right in for loop
  return testPivotIndex
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
