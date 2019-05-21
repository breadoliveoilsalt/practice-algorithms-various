/*
The solution here is basically to have 2 empty arrays equal to length of input array. (Relfective array)

The first reflective array keeps track of the highest mountain from left to right, for each element of the input

The second reflective array keeps track of the highest mountain from right to left, for each element of the input1

Then there is a final loop, where for each element of the input, look right and look left (at the coresponding
reflective arrays).  If both are higher, you are in a valley, so can hold capacity (water or snow).  If the min of left or right is equal to you or lower, you are not in a valley.  You look at mins to see what is the tallest ponint that can
hold capacity.

See: https://www.geeksforgeeks.org/trapping-rain-water/
https://hackernoon.com/implementing-trapping-rain-water-twitters-interview-question-using-uiimagegraphics-in-swift-5783885f6d42

*/


let input1 = [3,0,0,2,0,4] // output = 10
let input2 = [0,1,3,0,1,2,0,4,2,0,3,0] // output = 13

function calculateWaterCapacity(input) {

  let water = 0

  let highestPeakLeftToRight = new Array(input.length).fill(0)
  highestPeakLeftToRight[0] = input[0]

  let highestPeakRightToLeft = new Array(input.length).fill(0)
  highestPeakRightToLeft[input.length - 1] = input[input.length - 1]

  // fill highestPeakLeftToRight
  for (let i = 1; i < input.length; i++) {
    highestPeakLeftToRight[i] = Math.max(highestPeakLeftToRight[i-1], input[i])
  }

  // fill highestPeakRightToLeft
  for (let i = input.length - 2; i >= 0; i--) {
    highestPeakRightToLeft[i] = Math.max(highestPeakRightToLeft[i+1], input[i])
  }

  // calculate water by, for each element of input, looking to see if you're in valley and what is the lowest peak
  // (b/c lowest peak will determine water height)

  for (let i = 0; i < input.length; i++) {
    water += Math.min(highestPeakLeftToRight[i], highestPeakRightToLeft[i]) - input[i]
  }

  return water
}
