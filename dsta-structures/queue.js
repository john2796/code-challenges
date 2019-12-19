// Queues
//// First in First out

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class Queues {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  // push
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  // shift remove from beginning
  dequeue() {
    if (!this.head) return null
    let removed = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = removed.next
      removed.next = null
    }
    this.length--
    return removed
  }
}
