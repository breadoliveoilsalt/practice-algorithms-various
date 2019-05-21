
# NOTE: IC's version is better.  5 things to keep track of: Highest product of three, highest product of 2, lowest product of 2, highest, lowest

def highest_product_of_3(arr)

  highest_number = arr[0]
  second_highest_number = arr[0]
  third_highest_number = arr[0]

  lowest_number = arr[0]
  second_to_lowest_number = arr[0]

  arr.each do |num|

    highest_number = [highest_number, num].max

    if num < highest_number
      second_highest_number = [second_highest_number, num].max
    end

    if num < second_highest_number
      third_highest_number = [third_highest_number, num].max
    end

    if num < lowest_number
      lowest_number = num
    end

    if num > lowest_number && num < second_to_lowest_number
      second_to_lowest_number = num
    end

  end

  option1 = highest_number * second_highest_number * third_highest_number

  option2 = highest_number * lowest_number * second_to_lowest_number

  [option1, option2].max
end
