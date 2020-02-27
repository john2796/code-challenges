var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  x = x + ""

  for (let i = 0; i < Math.floor(x.length / 2); i++) {
    console.log(x[i], x[x.length - 1 - i])
    // 1221
    // 4 - 1 - 0 = 3
    if (x[i] !== x[x.length - 1 - i]) {
      return false
    }
  }
  return true
}

// console.log(isPalindrome(10));
console.log(isPalindrome(1221))
// console.log(isPalindrome(100));
