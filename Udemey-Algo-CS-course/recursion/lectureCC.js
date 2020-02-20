function countDown(num) {
  // base case
  if (num <= 0) {
    console.log("All done")
    return
  }
  console.log(num)
  // different input
  num--
  countDown(num)
}
// countDown(3)
function isOdd(arr) {
  // base
  if (arr.length <= 0) {
    console.log("All numbers are even")
    return
  }
  // condition to check if it's odd
  if (arr[arr.length - 1] % 2 !== 0) {
    console.log(`${arr[arr.length - 1]} is odd`)
    return
  }
  // different input
  arr.pop()
  isOdd(arr)
}

// isOdd([4,4,8])

function sumRange(num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}
sumRange(4)
/*
sumRange(4)
 4 + sumRange(3)            (6+4) = 10 answer
      3 + sumRange(2)       (3+3) = 6
          2 + sumRange(1)   (2+1) = 3
                     return 1

sumRange(3)
3 + sumRange(2)         (3+3) = 6
  2 + sumRange(1)       (2+3)
            return 1
*/
