class Trie

  def initialize
    @root_node = {}
  end

  def add_word(word)

    current_node = @root_node
    is_new_word = false

    word.each_char do |char|
      unless current_node.has_key?(char)
        is_new_word = true
        current_node[char] = {}
      end
      current_node = current_node[char]
    end

    unless current_node.has_key?(:end_of_word)
      is_new_word = true
      current_node[:end_of_word] = {}
    end

    is_new_word
  end
  
end
