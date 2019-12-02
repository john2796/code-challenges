/* Sliding Window */

/*
Find the max subarray of a fixed size K
Example input:
[4,2,1,7,8,1,2,8,1,0]
*/
function findMaxSumSubarray(arr, k) {
  let maxValue = 0
  let currentRunningSum = 0

  for (let i = 0; i < arr.length; i++) {
    // add i every loop at the beginning
    currentRunningSum += arr[i]

    // start at 2 index in the array
    if (i >= k - 1) {
      //compare, get the max value
      maxValue = Math.max(maxValue, currentRunningSum)
      // subtract every i - (k - 1) which will be 0 , 1, 2 etc..
      currentRunningSum -= arr[i - (k - 1)]
    }
  }
  return maxValue
}
const test = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
findMaxSumSubarray(test, 3)
