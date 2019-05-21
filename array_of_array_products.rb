require 'pry'

def array_of_array_products(arr)
  # your code goes here
  new_arr = [ ]

  accumulated_product_going_forward = 1

  i_first = 0

  while i_first < arr.length
    new_arr[i_first] = accumulated_product_going_forward
    accumulated_product_going_forward *= arr[i_first]
    i_first += 1
  end

  accumulated_product_going_backward = 1
  i_second = arr.length - 1
  while i_second >= 0
    new_arr[i_second] = accumulated_product_going_backward
    accumulated_product_going_backward *= arr[i_second]
    i_second -= 1
  end

  new_arr
end
