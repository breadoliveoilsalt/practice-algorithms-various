// untested but here's the jist:
// the key -- because you are building up off a base case, instead of building up to a capacity -- is to sort first!
// also, very helpful to have separate methods to getStackables

//AND I'm not sure this returns the highest thing at the end of the day.

let boxListForTesting = [
  {10, 5, 5},
  {7, 3, 2},
  {6, 4, 3},
  {3, 1, 1}
]

let memo = {}

function getStackables(boxList, baseBox) {
  let stackables = []
  boxList.forEach( (testBox) => {
    if (testBox.height < baseBox.height && testBox.width < baseBox.width && testBox.length < testBox.length) {
      stackables.push(testBox)
    }
  })
}

function getHighestStack(boxList) {
    // Ignoring edge cases for now
  if (boxList.length === 1) {
    return boxList[0].height
  }

  boxList.sort() // consider doing this elsewhere

    // The MIP here is that your memo has a key to a list of Boxes, not just a box!
  let baseBoxKey = JSON.stringify(boxList)

    // Check the memo, if not
  if (memo[baseBoxKey]) {
    return memo[baseBoxKey]
  }

    // No different than any other loop to get max height.  Key here is to use recursion with smaller set
  let height = 0

  boxList.forEach( (currentBox) => {
    let stackables = getStackables(boxList, currentBox)
    let currentHeight = currentBox.height + getHighestStack(stackables)
    height = Math.max(hight, currentHight)
  })

  memo[baseBoxKey] = height

  return height

}
