# 190206 - Trying to simplify:

# lesson here, go with IC version I commented out below.  AND guess_index always
# rounds down.
# Here it is:

def binary_search(arr, target)

  floor = -1
  ceiling = arr.length

  while floor + 1 < ceiling # Has to be plus one or else it will keep looping. NB: Guess index always rounds down.

    guess_index = (floor + ceiling)/2
    # puts "Guess_index", guess_index
    guess_value = arr[guess_index]

    if guess_value == target
      return true
    elsif guess_value < target
      floor = guess_index
    else
      ceiling = guess_index
    end

  end

  return false

end

arr = [1,2,3,4,5,6,7,8,9,10]

# # This cannot find 10 - freezes
#
# def binary_search(arr, target)
#
#   floor = 0
#   ceiling = arr.length - 1
#
#   while floor < ceiling
#
#     guess_index = (floor + ceiling)/2
#     guess_value = arr[guess_index]
#
#     if guess_value == target
#       return true
#     elsif guess_value < target
#       floor = guess_index
#     else
#       ceiling = guess_index
#     end
#
#   end
#
#   return false
#
# end
#
# arr = [1,2,3,4,5,6,7,8,9,10]

# Original, based off IC:
# def binary_search(arr, target)
#
#   floor = -1
#   ceiling = arr.length
#
#   while floor + 1 < ceiling
#
#     guess_index = (floor + ceiling)/2
#     guess_value = arr[guess_index]
#
#     if guess_value == target
#       return true
#     elsif guess_value < target
#       floor = guess_index
#     else
#       ceiling = guess_index
#     end
#
#   end
#
#   return false
#
# end

# Binary search applied to a range, something like this:

def find_repeat(arr)
  floor = 1
  ceiling = the_array.length - 1

  while floor < ceiling

    midpoint = (floor + ceiling) / 2

    items_in_lower_range = 0
    arr.each do |item|
      if item >= floor && item <= midpoint
        items_in_lower_range += 1
      end
    end

    distinct_possible_integers_in_lower_range = ceiling - floor + 1

    if items_in_lower_range > distinct_possible_integers_in_lower_range
      ceiling = midpoint
    else
      floor = midpoint
    end
  end

  return floor
end


#######
# This is from pramp.  Note it supports the edits I want to do to the first
#   example above:
#
#
#   function binarySearch(arr, num):
#     begin = 0
#     end = arr.length - 1
#
#     while (begin <= end):
#         mid = begin + floor((end-begin)/2)
#         if arr[mid] < num:
#             begin = mid + 1
#         else if arr[mid] == num:
#             return mid
#         else:
#             end = mid - 1
#
#     return -1
# Original that I modified, applied to range:
#
# def find_repeat(the_array)
# floor = 1
# ceiling = the_array.length - 1
#
# while floor < ceiling
#
#   # divide our range 1..n into an upper range and lower range
#   # (such that they don't overlap)
#   # lower range is floor..midpoint
#   # upper range is midpoint+1..ceiling
#   midpoint = floor + ((ceiling - floor) / 2)
#   lower_range_floor, lower_range_ceiling = floor, midpoint
#   upper_range_floor, upper_range_ceiling = midpoint+1, ceiling
#
#   # count number of items in lower range
#   items_in_lower_range = 0
#   the_array.each do |item|
#     # is it in the lower range?
#     if item >= lower_range_floor and item <= lower_range_ceiling
#       items_in_lower_range += 1
#     end
#   end
#
#   distinct_possible_integers_in_lower_range = \
#     lower_range_ceiling - lower_range_floor + 1
#
#   if items_in_lower_range > distinct_possible_integers_in_lower_range
#     # there must be a duplicate in the lower range
#     # so use the same approach iteratively on that range
#     floor, ceiling = lower_range_floor, lower_range_ceiling
#   else
#     # there must be a duplicate in the upper range
#     # so use the same approach iteratively on that range
#     floor, ceiling = upper_range_floor, upper_range_ceiling
#   end
# end
#
# # floor and ceiling have converged
# # we found a number that repeats!
# return floor
# end
