/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(arr) {
  // case when arr has only one item in it.
  if (arr.length === 0) return ""

  const sorted_arr = arr.concat().sort() // make a copy of array and sort

  const r1 = sorted_arr[0] // first item
  const r2 = sorted_arr[sorted_arr.length - 1] // second item in sorted array
  let a = 0 // counter
  while (a < r1.length && r1.charAt(a) === r2.charAt(a)) {
    a++
  }
  //  console.log(r1, r2)
  return r1.substring(0, a) // return substring from r1 start to loop in common
}
