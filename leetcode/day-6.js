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
    Make a variable that will hold the result
    Traverse the tree 
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
