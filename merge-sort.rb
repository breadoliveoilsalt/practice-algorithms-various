def merge(left_side, right_side)
  sorted_arr = []
  until left_side.empty? || right_side.empty?
    if left_side.first <= right_side.first
      sorted_arr << left_side.shift
    else
      sorted_arr << right_side.shift
    end
  end
  sorted_arr.concat(left_side).concat(right_side)
end

def merge_sort(arr)

  if arr.length <= 1
    return arr
  end

  mid_index = arr.length / 2
  left_side = arr[0...mid_index]
  right_side = arr[mid_index...arr.length]

  merge(merge_sort(left_side), merge_sort(right_side))
end
