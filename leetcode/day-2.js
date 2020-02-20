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
