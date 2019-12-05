/* reverse
 - Write a func, which accepts a string and returns a new string in reverse
*/
function reverse(str) {
  let reverseStr = ""
  function helper(s) {
    // base
    if (s.length === 0) return
    reverseStr += s[s.length - 1]
    // different input
    helper(s.slice(0, s.length - 1))
    // helper(s)
  }
  helper(str)
  return reverseStr
}
reverse("awesome") // 'emosewa'
// let test = 'awesome'
// test.slice(0, test.length -1)
// reverse('rithmschool') // 'loohcsmhtir'

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

/*
 someRecursive
 - accepts an array and a callback
 - the func returns true if a single value 
 - in the array returns true when passed to the callback ,   else false
*/
function someRecursive(array, callback) {
  if (array.length === 0) return false
  if (callback(array[0])) return true
  return someRecursive(array.slice(1), callback)
}
const isOdd = val => val % 2 !== 0
someRecursive([1, 2, 3, 4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

/*
 - write a recursive function called flatten,
 - which accepts an array of arrays 
 - and returns a new array with all values flattened.
*/
function flatten(a) {
  if (a.length === 0) return []
  let newArr = []
  for (let val of a) {
    console.log(Array.isArray(val))
    // check if val is an array
    if (Array.isArray(val)) {
      // spread old vals , u can also use concat
      newArr = [...newArr, ...flatten(val)]
    } else {
      newArr.push(val) // val is not arr , add it to newArr
    }
  }
  return newArr
}
/* 
 1, 2, 3, [4, 5]
 res = [1]
 1 is array ? no, add to res
 2...
 3...
 [4,5] is array ? , yes ,then copy prev values and call itself with the array as new parameter
*/
flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
