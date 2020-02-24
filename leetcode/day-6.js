/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 
 # Overview: 
   
    rearrange the tree in "in-order" 
    
    Psuedo Code 
    Make a dummy variable to create new TreeNode
    Make a variable name node that will be the final returned value
    Use Recursion to traverse through the Node
    Check for base case when there's no root
    start by traversing left
    set value and move pointer
 */
var increasingBST = function(root) {
  let dummy = new TreeNode()
  let node = dummy

  const traverse = function(root) {
    if (!root) return
    traverse(root.left)
    node.right = root
    node = node.right
    node.left = null
    traverse(root.right)
  }

  traverse(root)
  return dummy.right
}
