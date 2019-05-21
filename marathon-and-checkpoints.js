/*

function is : update(playerName, checkpoint)

Two ideas I had:


FIRST
Race is represented by an array with Sets equal to the checkpoints
Each sub array is a checkpoint, and the elements will be the runners

Have tracker for farthestCheckpoint.

Assume we know the number of racers

To get an array of who's first:

let output = new Set(raceCourse[farthestCheckpoint])

if output < numberOfRacers
  let tempCheckpoint = farthestCheckpoint - 1
  while output < numberOfRacers
    raceCourse[tempCheckpoint].forEach (racer => {
      if !output.has(racer)
        output.push(racer)
        break if output.length === numberOfRacers
      })
    tempCheckpoint--

SECOND - basing of LRU cache pattern

DLL = doubly linked list

each node has
name:
lastChckpoint:
next:
previous:

Have has to keep track of nodes - key is name, value is refernce to node

Have tracker to keep track of farthestCheckpoint - start at 1

if checkpoint one
  If hash is empty
    Start DLL - head equals current node
    insert node into hash
  else
    create a new node and update tail
      currentTail.next = newNode
      newNode.next = null
      tail = newNode


if checkpoint > 1
  farthestCheckpoint = Math.max(farthestCheckpoint, checkpoint)
  currentNode = hash[runner]
  currentNode.lastCheckpoint = checkpoint
  if currentNode.previous.lastCheckpoint < currentNode.checkpoint
      # remove the current node
    currentNode.previous.next = currentNode.next
    currentNode.next.pervious = currentNode.previous
      # find previous node in list with greater or equal checkpoint
    let newPrevious = currentNode.previous
    while newPrevious.lastCheckPoint < currentNode.checkpoint
      newPrevious = newPrevious.previous
    end
    checkpoint.next = newPrevious.next
    checkPoint.previous = newPrevious
    newPrevious.next = checkpoint
  prev = currentNode.previous
  while prev.checkpoint <







*/
