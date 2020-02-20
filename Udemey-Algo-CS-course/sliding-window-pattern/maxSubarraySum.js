/* Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the funciton. 

Note that a subaray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Constraints:
  Time Complexity  - O(N)
  Space Complexity - O(1)

Step 1:
 - restate problem : find the maximum sum of a subarray with the lenght of the number passed
 - input : array, n
 - output : maximum sum of a subarray
Step 2:
 - concrete examples
 - empty inputs ? 
 - invalid inputs ? 
 */

function maxSubarraySum(arr, n) {
  //  check if arr is less than n, null
  if (arr.length < n) return null

  let max = 0
  let temp = 0

  // loop, set first n value to max
  for (let i = 0; i < n; i++) {
    max += arr[i]
  }
  temp = max
  // loop, compare temp and currentMax value , set max val
  for (let i = n; i < arr.length; i++) {
    // console.log(`${temp} - ${arr[i -n]} + ${arr[i]} --> ${max}`)
    temp = temp - arr[i - n] + arr[i]
    max = Math.max(temp, max)
  }

  return max
}

// maxSubarraySum([100,200,300,400], 2)
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null

  let total = 0
  for (let i = 0; i < num; i++) {
    total += arr[i]
  }
  let currentTotal = total
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num]
    total = Math.max(total, currentTotal)
  }
  return total
}
