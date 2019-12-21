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
    if (this.root === null) {
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

  contains(value) {
    if (this.root === null) return false
    let current = this.root
    while (current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }

    return false
  }

  find(value) {
    if (!this.root) return false
    let current = this.root
    while (current) {
      if (value === current.value) return current
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  // Breadth First Search
  bfs(value) {
    let queue = []
    let data = []
    let current = this.root
    queue.push(current)
    while (queue.length) {
      current = queue.shift()
      data.push(current.value)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return data
  }
} // end of bst

var t = new BinarySearchTree()
t.insert(10)
t.insert(6)
t.insert(15)
t.insert(3)
t.insert(8)
t.insert(20)
