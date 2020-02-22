/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * 
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target === 0) return 0

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i]
    if (number >= target) {
      return i
      break
    } else if (i + 1 == nums.length) {
      return i + 1
    }
  }
}
