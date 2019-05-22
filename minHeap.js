/*

REM
  - What you pass to bubble up or bubble down is an index number!
  - Have to consider whether min is at index 0 or index 1
  - NOTE that geeks for geeks example (and eleoquent JS) assume your root is at index 1. So run with that.

*/


class MinHeap {

  constructor() {
    // 'data' is the heap.  Assumes root is at index 1, so index 0 set to nil.
    this.data = [nil]
  }

  insert(value) {
    this.data.push(value)
      // Remember that bubbleUp and bubbleDown take an index number as an argument.  That index represents where to start!
    this.bubbleUp(data.length - 1)
  }

}
