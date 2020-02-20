class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }
  find(value) {
    if (!this.root) return false
    let current = this.root
    while (current) {
      if (value === current.value) {
        return current
      }
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }
} // end of class

var t = new BinarySearchTree()
t.insert(10)
t.insert(6)
t.insert(15)
t.insert(3)
t.insert(8)
t.insert(20)
