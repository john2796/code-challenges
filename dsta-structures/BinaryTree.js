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
    while (true) {
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
      if (value === current.value) return true
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
      //  if(value < current.value){
      //    current = current.left
      //  } else if (value > current.value){
      //    current = current.right
      //  } else {
      //    return current
      //  }
    }
    return false
  }
} // end of bst

var t = new BinarySearchTree()
t.insert(10)
t.insert(5)
t.insert(13)

// t.insert(2)
// t.insert(7)
// t.insert(11)
// t.insert(16 )
