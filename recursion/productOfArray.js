/*
  Write a func called ... which takes in an array of nums and returns the product  of them all 
 */

function productOfArray(arr) {
  let total = 1

  function helper(nums) {
    if (nums.length === 0) return
    total *= nums[0]
    helper(nums.slice(1))
  }

  helper(arr)
  return total
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
