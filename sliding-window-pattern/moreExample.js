/* Sliding Window 
  Set of questions and examples
*/

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
const test1 = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
findMaxSumSubarray(test1, 3)

/*Find Smallest subarray with given sum*/
function smallestSubarray(arr, targetSum) {
  let minWindowSize = Infinity
  let currentRunningSum = 0
  let j = 0

  for (let i = 0; i < arr.length; i++) {
    currentRunningSum += arr[i]

    while (currentRunningSum >= targetSum) {
      // i - j + 1 , will give length of nums added to get value >= 8
      minWindowSize = Math.min(minWindowSize, i - j + 1)
      // shrink , move to right
      currentRunningSum -= arr[j]
      j++
    }
  }
  return minWindowSize
}

const test2 = [4, 2, 2, 7, 8, 1, 2, 8, 1, 0]
// smallestSubarray(test2, 8)
