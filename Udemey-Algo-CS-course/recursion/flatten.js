function flatten(a) {
  if (a.length === 0) return []
  let newArr = []
  for (let val of a) {
    // console.log(Array.isArray(val))
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
