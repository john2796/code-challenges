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
    this.length = null
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

  pop() {}
}

let list = new SinglyLinkedLists()
