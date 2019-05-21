
# IMP: graph is an adjacency list - a hash
# where key is node and value is array of nodes

require 'set'

def bfs(graph, start_node, target)

  nodes_to_visit = Queue.new
  nodes_to_visit << start_node

  nodes_already_seen << Set.new(start_node)

  while nodes_to_visit.length > 0

    current_node = nodes_to_visit.shift

    if current_node == target
      return true
    end

    graph[current_node].each do |neighbor|
      if nodes_already_seen.include?(neighbor)
        next
      else
        nodes_to_visit << neighbor
        nodes_already_seen << neighbor
      end
    end

  end
  
  return false
end
