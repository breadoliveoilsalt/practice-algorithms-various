/*

REM
  - What you pass to bubble up or bubble down is an index number!
  - Have to consider whether min is at index 0 or index 1
  - For every subtree, the root should be the min of that subtree
  - NOTE that geeks for geeks example (and eleoquent JS) assume your root is at index 1. So run with that.
    - Very helpful: https://www.geeksforgeeks.org/min-heap-in-java/

*/


class MinHeap {

  constructor() {
    // 'data' is the heap.  Assumes root is at index 1, so index 0 set to nil.
    this.data = [null]
  }

  insert(value) {
    this.data.push(value)
      // Remember that bubbleUp and bubbleDown take an index number as an argument.  That index represents where to start!
    this.bubbleUpFrom(this.data.length - 1)
  }

  bubbleUpFrom(index) {
      // index should be the this.data.length-1

    if (index <= 1) {
      return
    }

    let currentIndex = index
    let parentIndex = this.getParentIndexOf(currentIndex)

    while (this.data[currentIndex] < this.data[parentIndex]) {
      swap(currentIndex, parentIndex)
      currentIndex = parentIndex
      parentIndex = this.getParentIndexOf(currentIndex)
    }
      // Note: could do this recursively as well

  }

  extractMin () {
      // Grab Root. Insert the last element into root. Bubble down.
    let min = this.data[1]

    this.data[1] = this.data.pop()



  }

  bubbleDownFrom(index) {
    // some sources say swap with left child before right; some say swap with larger child; some say swap with lesser child.


    while (true) {

      let current = this.data[index]
      let leftChild = this.data[this.getLeftChildIndexOf(index)]
      let rightChild = this.data[this.getRightChildIndexOf(index)]

      if (this.isLeafNode(index) || (current <= leftChild && current <= rightChild){
        break
      }

      // Swap with the lesser child
      if (leftChild < rightChild) {
        this.swap(index, this.getLeftChildIndexOf(index))
        index = this.getLeftChildIndexOf(index)
      } else {
        this.swap(index, this.getRightChildIndexOf(index))
        index = this.getRightChildIndexOf(index)
      }
    }
  }


  getParentIndexOf(index) {
    return Math.floor(index/2)
  }

  getLeftChildIndexOf(index) {
    return index * 2
  }

  getRightChildIndexOf(index) {
    return (index * 2) + 1
  }

  isLeafNode(index) {
    let heapSize = this.data.length
    return index > Math.floor(heapSize/2) // Note: has to be greater than, not greater than or equal to. A leaf has no children
  }

  swap(index1, index2) {
    let temp = this.data[index1]
    this.data[index1] = this.data[index2]
    this.data[index2] = temp
  }

}
