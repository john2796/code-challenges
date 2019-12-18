class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}
class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      //        T
      // 99 --> 100
      //     <-- p
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  //tail
  // 1 <--> 2 <--> 3 <--> 4 <--> 5
  // prev
  // 1 <--> 2 <--> 3 <--> 4
  pop() {
    if (!this.head) return undefined
    let removed = this.tail
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail = removed.prev
      this.tail.next = null
      removed.prev = null
    }
    this.length--
    return removed
  }
} // end of class

let l = new DoublyLinkedList()
l.push("one")
l.push("two")
l.push("three")
