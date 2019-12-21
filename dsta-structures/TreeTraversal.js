class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class TreeTraversal {
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
  bfs() {
    let res = []
    let queue = []
    let current = this.root
    queue.push(current)
    while (queue.length) {
      current = queue.shift()
      res.push(current.value)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return res
  }

  // starting from node get left side then right
  dfsPreOrder() {
    let data = []
    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)
    return data
  }

  // same step with PreOrder , visit data first then push them to final array
  dfsPostOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }

  // traversing in Order , visit left then push node to result
  dfsInOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
} // end of class

var t = new TreeTraversal()
t.insert(10)
t.insert(6)
t.insert(15)
t.insert(3)
t.insert(8)
t.insert(20)
