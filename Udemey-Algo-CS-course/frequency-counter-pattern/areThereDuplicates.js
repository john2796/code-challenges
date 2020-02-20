/* Frequency Counter / Multiple Pointer - areThereDuplicates

Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in , You calove this using the frequency patter OR the multiple patter. 



Step 1 : Understand the problem 
1. Restate
  - check for duplicates , 
2. input
  - num , string
3. output
  - boolean


Step 2: Explore concrete examples
  areThereDuplicates(1,2,3) false
  areThereDuplicates(1,2,2) true
  areThereDuplicates('a', 'b', 'c','a' ) true

  2. empty inputs ? 
  3. invalid inputs ? 



Step 3: Break it down 
 */

// Frequency Counter pattern approach
function areThereDuplicates(...args) {
  if (args.length === 0) return false
  let lookup = {}

  for (let item of args) {
    lookup[item] = ++lookup[item] || 1
  }
  // console.log(lookup)

  for (let key in lookup) {
    if (lookup[key] > 1) {
      return true
    }
  }

  return false
}
