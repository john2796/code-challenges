/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 
 
    Keywords: max depth, longest path from the root nodoe down the farthest leaf node


Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],
solved: X
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0
  }
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  // Divide and Conquer
  let max = Math.max(left, right) + 1
  return max
}
