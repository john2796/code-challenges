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
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let count, current
    if (index <= this.length / 2) {
      count = 0
      current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
    } else {
      count = this.length - 1
      current = this.tail
      while (count !== index) {
        current = current.prev
        count--
      }
    }
    return current
  }

  set(index, value) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = value
      return true
    }
    return false
  }
  // 1  <--> 2          --> 3
  // 1  <--> 2  <--> 5  <--> 3
  //        fn  nn
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)
    let newNode = new Node(value)
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next

    prevNode.next = newNode
    newNode.prev = prevNode
    newNode.next = nextNode
    nextNode.prev = newNode

    this.length++
    return true
  }

  // 1  <--> 2           --> 3
  // 1  <--> 2  <--> 5  <--> 3
  /// .      p    remove     n
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let removed = this.get(index)
    let prevNode = removed.prev
    let nextNode = removed.next

    prevNode.next = nextNode
    nextNode.prev = prevNode
    removed.next = null
    removed.prev = null
    this.length--
    return removed
  }
  reverse() {}
} // end of class

let l = new DoublyLinkedList()
l.push("one")
l.push("two")
l.push("three")
