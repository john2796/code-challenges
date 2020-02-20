//  Multiple Pointer Pattern approach
// with multiple pointer has to be sorted
function areThereDuplicates(...args) {
  if (args.length === 0) return false

  args.sort((a, b) => a > b)
  // O(1)
  let i = 0
  let j = 1

  // O(n)
  while (j < args.length) {
    //  console.log(args[i], args[j])
    if (args[i] === args[j]) return true
    i++
    j++
  }
  return false
}
// areThereDuplicates(1,2,3) // false
// areThereDuplicates(1,2,2) //true
areThereDuplicates("a", "b", "c", "d", "e", "f", "g", "e") //true
