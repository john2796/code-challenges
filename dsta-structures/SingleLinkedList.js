class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.tail = null
    this.head = null
    this.length = 0
  }
  // add to end
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
  // remove to end
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
  // remove in the beginnin
  shift() {
    if (!this.head) return undefined
    let current = this.heaad
    this.head = current.next
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  // add at the beginning
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index >= this.length || index < 0) return null
    let current = this.head
    let count = 0
    while (count !== index) {
      current = current.next
      count++
    }
    return current
  }
  set(value, index) {
    let foundNode = get(index)
    if (foundNode) {
      foundNode.val = value
    }
    return false
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unshift(val)
    // 1 -> 5 -> 2 -> 3 -> 4
    let newNode = new Node(val)
    let prev = get(index - 1)
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined
    if (index === this.length - 1) return this.prop()
    if (index === 0) return this.shift()
    let prev = get(index - 1)
    let removed = prev.next
    prev.next = removed.next
    this.length--
    return removed
  }
  print() {
    let current = this.head
    let result = []
    while (current) {
      result.push(current.val)
      current = current.next
    }
    return result
  }
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    while (node) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}
// 100  -->  201  -->  250  -->  350  -->   999
//           prev      node                 next
// 100  <-- 201 <-- null

let l = new SinglyLinkedList()
l.push("one")
l.push("two")
l.push("three")
