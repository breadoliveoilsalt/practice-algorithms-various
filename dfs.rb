
# from https://github.com/brianstorti/ruby-graph-algorithms/blob/master/depth_first_search/depth_first_search.rb

class DepthFirstSearch
  def initialize(graph, source_node)
    @graph = graph
    @source_node = source_node
    @visited = []
    @edge_to = {}

    dfs(source_node)
  end

  # After the depth-first search is done we can find
  # any vertice connected to "node" in constant time [O(1)]
  # and find a path to this node in linear time [O(n)].
  def path_to(node)
    return unless has_path_to?(node)
    path = []
    current_node = node

    while(current_node != @source_node) do
      path.unshift(current_node)
      current_node = @edge_to[current_node]
    end

    path.unshift(@source_node)
  end

  private
  def dfs(node)
    @visited << node
    node.adjacents.each do |adj_node|
      next if @visited.include?(adj_node)

      dfs(adj_node)
      @edge_to[adj_node] = node
    end
  end

  def has_path_to?(node)
    @visited.include?(node)
  end
end

# from https://stackoverflow.com/questions/31192489/ruby-recursive-dfs-method
def depth_first_search(node, target)
    if node.value == target
        puts "yes"
        return node
    end
    left = depth_first_search(node.child_left, target) if node.child_left
    right = depth_first_search(node.child_right, target) if node.child_right
    left or right
end



# from https://www.sitepoint.com/graph-algorithms-ruby/
def depth_first_search(adj_matrix, source_index, end_index)
  node_stack = [source_index]

  loop do
    curr_node = node_stack.pop
    return false if curr_node == nil
    return true if curr_node == end_index

    children = (0..adj_matrix.length-1).to_a.select do |i|
      adj_matrix[curr_node][i] == 1
    end

    node_stack = node_stack + children
  end
end
# What I need to do here:

# - Have one version of recursion - I guess I can assume it's for a simple tree
# - Then have one, non-recursive, for each of the forms: adjacency list, adjacency matrix, and edge list (maybe, for last one)
  # - These last ones should be classes, with memoization and a stack
  # - It will also be helpful to know what a fucking node looks like. Does it have a value? Do I mark it as visited? Or do I simply leave that up to the Stack

# A very simple dfs for a binary tree can be found here:
# https://www.interviewcake.com/question/ruby/balanced-binary-tree?course=fc1&section=trees-graphs
# Note there was no need for a list of nodes already seen b/c it was a binary tree
# AND with a binary tree, the only argument you need is the root node, b/c that will have .left and .right, and you can simply find the other nodes from there!

# Also a dfs here, albeit for a binary tree:
# https://www.interviewcake.com/question/ruby/bst-checker?course=fc1&section=trees-graphs



# Basics:

    # TN: there can be multiple, different args
    # here, depending on what trying to do

    # Also TN: seems no set here to keep track of
    # nodes_visited, but consider...

def dfs(tree, target)

  node_stack = [ ]

    #push root
  node_stack.push(tree[0])

    # can also set current_node and do `while current_node`
  while node_stack.length > 0

      # pop first
    node = node_stack.pop

      # then do or look for something, generally w conditional
    if node == target
      return true
    else
        # seems multiple ways to do, but doing right before left
        # makes sense to me, even though most do left before right.
        # With my way, the left is pop'd first and you go down left
        # side first

        #### BELOW IS NOT RIGHT -- THERE HAS TO BE SOME RECURSSION HERE
          # This actually is starting to make sense: https://github.com/brianstorti/ruby-graph-algorithms/blob/master/depth_first_search/depth_first_search.rb
          #http://haozeng.github.io/blog/2014/01/05/trees-in-ruby/
          #https://github.com/breadoliveoilsalt/depth-first-search-lab-v-000/blob/solution/index.js
      if node.left
        node_stack.push(node.left)
      end
      if node.right
        node_stack.push(node.right)
      end
    end
  end

  return false

end
