/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 
 * 
 * Given an array nums of integers, return how many of them contain an even number of digits.
 

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
 */
var findNumbers = function(nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let convertToStr = nums[i].toString()
    if (convertToStr.length % 2 === 0) {
      count++
    }
  }
  return count
}

/**
 * Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

 

Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 

                10
            5.      15
        3      7        18

 */
var rangeSumBST = function(root, L, R) {
  let data = []
  function traverse(node) {
    if (node.left) traverse(node.left)
    data.push(node.val)
    if (node.right) traverse(node.right)
  }
  traverse(root)

  return data.filter(x => x >= L && x <= R).reduce((a, b) => a + b)
}
