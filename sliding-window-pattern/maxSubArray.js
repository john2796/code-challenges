// THIS CHallenge uses Sliding Window Pattern

function maxSubArraySum(arr, n) {
  // two var , max , temp
  let max = 0
  let temp = 0
  // check if arr is less than num
  if (arr.length < n) return null
  // loop through num and and maxSum
  for (let i = 0; i < n; i++) {
    max += arr[i]
  }
  temp = max
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i]
    max = Math.max(max, temp)
  }
  return max
}

maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
// 2, 6, 9  = 17 - 2 + 2 =  Math.max(17, 17)
// 6, 9, 2  = 17  - 6 + 1 = Math.max(12 , 17)
// 9, 2, 1  = 17  - 9 + 8 = Math.max(16 , 17)
// and so on....
