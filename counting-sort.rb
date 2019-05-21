def counting_sort(arr, max_value)

  num_counts = [0] * (max_value + 1)

  arr.each do |num|
    num_counts[num] += 1
  end

  # Now that I have the count, I can tell how many many array slots come before
  # a particular number
  indices_arr = [ ]
  num_items_before = 0
  num_counts.each do |count|
    indices_arr.push(num_items_before)
    num_items_before += count
  end

  sorted_arr = [nil] * arr.length - 1

  arr.each do |item|
    sorted_list[indices_arr[item]] = item
    indices_arr[item] += 1
  end

  return sorted_list

end

# 181229 - found this in the IC readings as a new reading.  Note it is in
# python for now.

# def counting_sort(the_list, max_value):
#
#   # Count the number of times each value appears.
#   # counts[0] stores the number of 0's in the input
#   # counts[4] stores the number of 4's in the input
#   # etc.
#   counts = [0] * (max_value + 1)
#   for item in the_list:
#       counts[item] += 1
#
#   # Initialize the indices list based on the number of
#   # items in the input that are smaller.
#   # indices[0] stores the index in the sorted list where the next 0 goes
#   # indices[4] stores the index in the sorted list where the next 4 goes
#   indices = []
#   num_items_before = 0
#   for count in counts:
#       indices.append(num_items_before)
#       num_items_before += count
#
#   # Output list to be filled in
#   sorted_list = [None] * len(the_list)
#
#   # Run through the input list
#   for item in the_list:
#
#       # Place the item in the sorted list
#       sorted_list[ indices[item] ] = item
#
#       # And, make sure the next item we see with the same value
#       # goes after the one we just placed
#       indices[item] += 1
#
#   return sorted_list

# # I started noticing IC changing this algo.  See above.
# def counting_sort(arr, max_value)
#
#   num_counts = [0] * (max_value + 1)
#
#   arr.each do |num|
#     num_counts[num] += 1
#   end
#
#   sorted_arr = []
#
#   max_value.downto(0) do |score| # this is b/c problem is asking you to sort in reverse
#
#     count = num_counts[score]
#
#     (0...count).each do |time|
#
#       sorted_arr.push(score)
#     end
#
#   end
#
#   return sorted_arr
#
# end

# Not quite work b/c the second loop not keep things at O(n). IC recently revised.
# def counting_sort(arr, max_value)
#
#   num_counts = [0] * (max_value + 1)
#
#   arr.each do |num|
#     num_counts[num] += 1
#   end
#
#   sorted_arr = []
#
#   num_counts.each_with_index do |count_of_num, num| # => el, index
#
#     count_of_num.times do
#       sorted_arr.push(num)
#     end
#
#   end
#
#   return sorted_arr
#
# end
#
#
# Works:
#
# def counting_sort(arr, max_value)
#
#   num_counts = [0] * (max_value + 1)
#
#   arr.each do |num|
#     num_counts[num] += 1
#   end
#
#   sorted_arr = []
#
#   num_counts.each_with_index do |count_of_num, num| # => el, index
#
#     (0...count_of_num).each do |time|
#       sorted_arr.push(num)
#     end
#
#   end
#
#   return sorted_arr
# end
#
# counting_sort([1,7,4,2],7)
