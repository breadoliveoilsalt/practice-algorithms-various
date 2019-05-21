
function solution(root) {

    let valuesSeen = [root.x]
    let depth = 1
    return getDepths(root, [], depth)
}


function getDepths(node, valuesSeen, depth) {

    let maxDepth = depth
    let tempDepth1 = 0
    let tempDepth2 = 0

    if (node.l && !valuesSeen.includes(node.l.x)) {
        let valuesSeenClone1 = [...valuesSeen, node.l.x]
        tempDepth1 = getDepths(node.l, valuesSeenClone1, depth + 1)
    }

    if (node.r && !valuesSeen.includes(node.r.x)) {
        let valuesSeenClone2 = [...valuesSeen, node.r.x]
        tempDepth2 = getDepths(node.r, valuesSeenClone2, depth + 1)
    }

    return Math.max(maxDepth, tempDepth1, tempDepth2)
}


function Node(value) {
  this.x = value,
  this.l = null,
  this.r = null
}


/*
Solution works for this:
          10
      5       20  // this level alone works
*/

/*
Solution works for this:
          10
      5       20
    5   5

*/

/*
Solution works for this:
          10
      5       20
    6   5

*/

/*
Solution works for this:
          10
      20       20
    6   5         10
  17

*/

/*
Solution works for this:
          10
      20       20
    6   5         30
  17

*/

/*
Solution works for this:
          10
      20       20
    6   5         30
  17                40
                      50
*/

let root1 = new Node(10)

root1.l = new Node(20)
root1.l.l = new Node(6)
root1.l.r = new Node(5)
root1.l.l.l = new Node(17)

root1.r = new Node(20)
root1.r.r = new Node(30)
root1.r.r.r = new Node(40)
root1.r.r.r.r = new Node(50)
