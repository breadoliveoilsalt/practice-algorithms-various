

def fib(n)

  if n == 0 || n == 1
    n
  end

    prev_prev = 0  # 0th fibonacci
    prev = 1       # 1st fibonacci
    current = 0

    (n - 1).times do
      current = prev + prev_prev
      prev_prev = prev
      prev = current
    end

    current
  end
end

# This is his latest as of 190101:

def fib(n)

  if n == 0 || n == 1
    n
  else
    prev_prev = 0  # 0th fibonacci
    prev = 1       # 1st fibonacci

    (n - 1).times do
      prev_prev, prev = prev, prev + prev_prev
    end

    prev
  end
end
