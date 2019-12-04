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
