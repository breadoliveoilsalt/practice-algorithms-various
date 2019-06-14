// To test

function dfs(root, target) {
  if (root.value === target) {
    return root
  }

  let left = root.left ? dfs(root.left) : null
  let right = root.right ? dfs(root.right) : null

  return left || right
}
