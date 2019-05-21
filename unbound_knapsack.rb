# NOTE TWO TYPES OF PROBLEMS BELOW.

# FIRST SOLUTION: YOU HAVE A BASKET AND A LIST OF THE WEIGHTS OF ITEMS.  **HOW MANY DIFFERENT WAYS** ARE THERE TO FILL THE BASKET

# SECOND SOLUTION: YOU HAVE A BASKET, AND A LIST WITH THE WEIGHTS AND VALUE OF ITEMS. **WHAT IS THE MAXIMUM VALUE** YOU CAN ACHIEVE FILLING THE BASKET?
#   - Note that the array argument is a 2D array with (at least) two data points - item weight and item value

# - Both are effectivly dynamic programming algos.
# - Both build off the solutions for smaller, "temporary baskets", the capacities of which are represented by a new array's indices.
# - first argument is an integer, second argument is a list of integers (the weight of each item)

# - Key words: capacity, basket, bag, weight, value, ** how many different ways to fill **, ** maximum value from filling  **

# rem theme - for each capacity, you have to loop through everything - a douple loop
# ------------------------------------------------------------------------------
# FIRST SOLUTION - this was the coin/change problem from IC

def ways_to_fill_basket(basket_capacity, item_weights)

  ways_to_make_i = [1] + Array.new(basket_capacity, 0)

  item_weights.each do | item_weight |
    (item_weight..capacity).each do | temporary_basket |

      remainder = temporary_basket - item_weight
      ways_to_make_i[temporary_basket] += ways_to_make_i[remainder] # DON'T FORGET THE =+ !!!!

    end
  end

  ways_to_make_i[basket_capacity]

end

# when ways_to_make_i is initialized, the [1] represents that at capacity 0.
# There is one way to achieve that capacity - put nothing in it! The rest of the
# looping needs to build off that, so don't forget


# -----------------------------------------------------------------------------_

# SECOND SOLUTION

def max_basket_value(basket_capacity, item_weights_and_values)

  value_at_capacity_i = Array.new(basket_capacity + 1, 0)

    # You go through capacities first b/c you're testing for MAX VALUE at this capacity
    # I should have set value_at_capacity_i to 0 to starte
  (0..basket_capacity).each do | temporary_basket |

    current_max_value = 0

    item_weights_and_values.each do | weight, value |

      if weight <= temporary_basket # This tells me I have a chance at satisfying this basket_capacity

        remainder = temporary_basket - weight

        max_value_using_item = value + value_at_capacity_i[remainder]

        current_max_value = [current_max_value, max_value_using_item].max

      end

      value_at_capacity_i[temporary_basket] = current_max_value

  end

  value_at_capacity_i[basket_capacity]

end

# Note the above ignores the infinity case, where weight of item is 0 but it has
# value nonetheless.
