/**
 * 1365. How Many Numbers Are Smaller Than the Current Number
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let result = []
  let queue = [...nums]
  let count = 0
  while (queue.length) {
    for (let i = 0; i < nums.length; i++) {
      let q = queue[0]
      let num = nums[i]
      if (num < q) {
        count++
      }
    }
    result.push(count)
    count = 0
    queue.shift()
  }

  return result
}
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
smallerNumbersThanCurrent([8, 1, 2, 2, 3])
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
