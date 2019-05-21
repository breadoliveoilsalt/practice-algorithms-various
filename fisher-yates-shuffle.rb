def get_random(floor, ceiling)
  rand(floor..ceiling)
end

def shuffle(arr)

  (0..the_array.length - 1).each do |index_we_are_choosing_for|

    random_choice_index = get_random(index_we_are_choosing_for, arr.length - 1)

    if random_choice_index != index_we_are_choosing_for
      the_array[index_we_are_choosing_for], the_array[random_choice_index] =
        the_array[random_choice_index], the_array[index_we_are_choosing_for]
    end
  end
end

      # Note: on line 7, IC has "-2", but I can't figure out why.
      # Note sure we even need line 11, as the loop will just continue to next
      # index number in that case.
