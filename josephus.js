

function josephus(n, k) {

  let tracker = new Array(n)


  for (let i = 0; i < tracker.length; i++) {
    tracker[i] = i + 1
  }

  console.log("Tracker:", tracker)

  while (tracker.length > 1) {

    let skippedIndex = k-1 % (tracker.length)
    let newStartingIndex = k % (tracker.length)

    tracker = tracker.splice(k).concat(tracker.splice(0, skippedIndex))
    // or maybe try something like this: arr.push(arr.shift()) a few times

    console.log(tracker)

  }

  return tracker[0]
}


// BIG LESSONS HERE:
// you cannot use + on two arrays in js! That's for strings only!

// In while loop, we get infinite loop in some cases where k > tracker.length.  Using `% tracker.length - 1` causes the same problem.
// So need to reset index with `% tracker.length`
