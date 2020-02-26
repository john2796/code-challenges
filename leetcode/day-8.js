// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
//              Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

var addDigits = function(num) {
  let total = num
  let arr = total.toString().split("")

  function checkSplit(arr) {
    // base
    if (arr.length <= 1) return num
    total = arr.reduce((a, b) => Number(a) + Number(b), 0)
    // different input
    if (total >= 10) {
      arr = total.toString().split("")
      checkSplit(arr)
    }
    checkSplit(arr.slice(0, 0))
  }

  checkSplit(arr)

  return total
}
