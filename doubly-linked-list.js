

class Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.previous = null
  }
}


class DLL {

  constructor(capacity) {
    this.capacity = capacity, // need if doing LRU cache
    this.head = null,
    this.tail = null
    this.count = 0 // DON'T FORGET THIS!!
    this.nodeMap = {} // best to use new Map () = > then I'm sure look ups and deletions will be in O(1) time
      // then I can use nodeMap.size()
  }

  addNode(value) {
    let node = new Node(value)
      // assumes unique values.  Maybe hash
    this.nodeMap[value] = node
    if (!this.head) {
      this.head = node
      this.tail = node
    } else (
      let currentTail = this.tail
      currentTail.next = node
      node.previous = currentTail
      this.tail = node
    )
  }

  findNode(value) {
    if (nodeMap[value]) {
      return nodeMap[value]
    } else {
      return false
    }
  }

  currentlyOneNode() {
    return this.head !== null && this.head === this.tail
  }

  removeNode(value) {
    let currentNode = findNode(value)
    // revamp - test if head = tail
    if (currentNode) {
      currentNode.previous.next = currentNode.next
      currentNode.next.previous = currentNode.previous
    }
    return currentNode
  }

  moveExistingNodeToHead(value) {
    let currentNode = this.findNode(value)
    if (currentNode) {
      this.removeNode(currentNode)
      let currentHead = this.head
      currentHead.previous = currentNode
      currentNode.next = currentHead
    }
  }

  addNewNodeToHead(value) {
    let currentNode = new Node(value)
    let currentHead = this.head
    currentHead.previous = currentNode
    currentNode.next = currentHead
  }

  removeNodeFromTail() {
      // not going to work to pass an object in there, but ok as a reminder
    removeNode(this.tail)
  }

  // clear values from nodeMap

}
