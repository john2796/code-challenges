class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class SinglyLinkedLists {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
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
  traverse() {
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let prev = current
    while (current.next) {
      prev = current
      current = current.next
    }
    this.tail = prev
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    let current = this.head
    this.head = current.next
    this.length--
    return current
  }
}

let list = new SinglyLinkedLists()
list.push("one")
list.push("two")
list.push("three")
