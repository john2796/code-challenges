// ======================================================
/* isPalindrome
 - returns true if the string passed to it is a palindrome
 - reads the same forward and backward
*/
function isPalindrome(str) {
  let reversedStr = ""
  function reverse(s) {
    // base
    if (s.length === 0) return
    reversedStr += s[s.length - 1]
    // different input
    reverse(s.slice(0, s.length - 1))
  }
  reverse(str)
  return str === reversedStr ? true : false
}
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
