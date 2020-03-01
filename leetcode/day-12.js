/**
 * @param {number[]} nums
 * @return {number}
 
 
 Given a non-empty array of integers
 return the third maximum number in this array

 */
var thirdMax = function(nums) {
  nums = Array.from(new Set(nums)) // Turn Object to array after removing dups
  var len = nums.length
  if (len <= 2) {
    return Math.max(...nums)
  }
  if (len === 3) {
    return Math.min(...nums)
  }
  nums = nums.sort((a, b) => {
    return b - a
  })
  return nums[2]
}

// thirdMax([3, 2, 1]) // 1
// thirdMax([2, 2, 3, 1]) // 1
// thirdMax([1, 2]) // 2
thirdMax([1, 1, 2]) // 2
