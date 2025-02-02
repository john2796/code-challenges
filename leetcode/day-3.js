/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead
 * 
 * 
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations..
 */
var moveZeroes = function(nums) {
  // remove and count how many zero you have
  let zeroCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++
      nums.splice(i, 1)
      i--
    }
  }

  // add zero back
  for (let i = 0; i < zeroCount; i++) {
    nums.push(0)
  }
  return nums
}


//==================================== 
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0 ; i < nums.length;i++){
        if(nums[i] === val){
            nums.splice(i,1)
            i--
        }
    }
    return nums.length
};
