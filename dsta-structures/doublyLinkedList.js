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
  // add to end
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

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

  // h hp  hn
  // 1 --   2 <--> 3 <--> 4 <--> 5
  //        2 <--> 3 <--> 4 <--> 5
  // remove from beginning
  shift() {
    if (!this.head) return undefined
    let removed = this.head
    if (this.head === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = removed.next
      this.head.prev = null
      removed.next = null
    }
    this.length--
    return removed
  }

  print() {
    let current = this.head
    const result = []
    while (current) {
      result.push(current.val)
      current = current.next
    }
    return result
  }

  // add at the beginning
  //        1 <--> 2
  // 3 <--> 1 <--> 2
  unshift(val) {
    let newNode = new Node(val)
    let current = this.head
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.head.next = current
      current.prev = newNode
    }
    this.length++
    return this
  }
} // end of class

let l = new DoublyLinkedList()
l.push("one")
l.push("two")
l.push("three")
