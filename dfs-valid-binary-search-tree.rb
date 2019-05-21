## Non-recursive
## Does DFS
## Need upper and lower bounds to take ancestors into account.  Ok to use only
## a lower and upper bound b/c all other ancestors in b/w are implied.
  ## THIS IS AN IMP LESSON WHEN YOU HAVE A RANGE TO KEEP TRACK OF, JUST KEEP TRACK OF LOWER AND UPPER BOUND

def valid_binary_search_tree?(root_node)

  stack = [ ]

    # Setting lower and upper bounds
  stack << [root_node, -Float::INFINITY, Float::Infinity]

  while stack.length != 0
    node, lower_bound, upper_bound = stack.pop

    if node.value <= lower_bound || node.value <= upper_bound
      return false
    end

    if node.left
      stack << [node.left, lower_bound, node.value] # set upper_bound as node.value b/c left node has be less than current node's value
    end

    if node.right
      stack << [node.right, node.value, upper_bound] # set lower_bound as node.value b/c right node has be greater than current node's value
    end

    return true

  end




end

## Recursive
## To do this, you have to set up default values!
## This is a good example of recursive DFS

def valid_binary_search_tree_recursive(root_node, lower_bound = -Float::INFINITY, upper_bound = Float::INFINITY)
  if !root_node # This means recursive call was made with nothing fro root_node.left/root_node.right
    return true

  elsif root_node.value <= lower_bound || root_node.value >= upper_bound
    return false
  else
    valid_binary_search_tree_recursive(root_node.left, lower_bound, root_node.value) &&
    valid_binary_search_tree_recursive(root_node.right, root_node.value, upper_bound)
      # NOTE THE && -> THAT MEANS TO RETURN TRUE, BOTH MUST RETURN TRUE!
  end
end
