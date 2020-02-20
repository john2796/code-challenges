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
