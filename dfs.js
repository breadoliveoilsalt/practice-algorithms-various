// To test

function dfs(root, target) {
  if (root.value === target) {
    return root
  }

  let left = root.left ? dfs(root.left) : null
  let right = root.right ? dfs(root.right) : null

  return left || right

}

function dfs(graph, target) {

  let nodesSeen = new Set()
  nodesSeen.add(graph[0])

  let stack = []
  stack.push(graph[0])

  while (stack.length > 0 ) {
    let currentNode = stack.pop()
    if (currentNode.value === target) {
      return currentNode
    }
    currentNode.neighbors.forEach( neighbor => {
      if (nodesSeen.has(neighbor)) {
        next
      } else {
        nodesSeen.add(neighbor)
        stack.push(neighbor)
      }
    })
  }

  return false

}
