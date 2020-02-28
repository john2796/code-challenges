/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 
 lowercase
 return true if we can swap two letters in A
 So that the result equals B ?
 
 // convert everything to lowercase first 
 
 
 swap two letter in A
 Compare it to B
 */

// discussion solution
var buddyStrings = function(A, B) {
  if (A.length != B.length) return false
  let [dif, chars] = [[], new Set(A)]
  for (i in A) {
    if (A[i] != B[i]) {
      dif.push([A[i], B[i]])
    }
  }
  console.log(dif, chars)
  return (
    (dif.length == 2 && dif[0].join() == dif[1].reverse().join()) ||
    (dif.length == 0 && chars.size != A.length)
  )
}
buddyStrings("ab", "ba")
