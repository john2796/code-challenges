// LIFO
// Lasts in First Out
// STACK SLL singlyLinkedList implementation
// L.I.F.O
// Last In First Out

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class Stack {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  print() {
    let current = this.head
    let res = []
    while (current) {
      res.push(current.val)
      current = current.next
    }
    return res
  }
  // remove from beginning O(1)
  // reall using shift code just renamed it because we need to use O(1) for removal
  pop() {
    if (!this.head) return null
    let removed = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      // 1 --> 2 --> 3 --> 4
      //       2 --> 3 --> 4
      this.head = removed.next
      removed.next = null
    }
    this.length--
    return removed
  }
  // add from beginning O(1)
  // 1 --> 2 --> 3 --> 4
  //       2 --> 3 --> 4
  //reall using unshift code
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      let current = this.head
      this.head = newNode
      newNode.next = current
    }
    return ++this.length
  }
} // end of class

let s = new Stack()
s.unshift("one")
s.unshift("two")
s.unshift("three")
s.print()
