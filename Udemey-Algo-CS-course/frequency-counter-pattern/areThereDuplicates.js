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

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let obj1 = {}
  let obj2 = {}

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    obj1[char] = ++obj1[char] || 1
  }
  for (let i = 0; i < t.length; i++) {
    let char = t[i]
    obj2[char] = ++obj2[char] || 1
  }
  // console.log(obj1,obj2)
  for (let key in obj1) {
    console.log(key)
    if (obj1[key] !== obj2[key]) {
      return key
    }
  }

  for (let key in obj2) {
    console.log(key)
    if (obj1[key] !== obj2[key]) {
      return key
    }
  }
  return ""
  // let longer = s.length > t.length ? s : t

  // s.split("").sort().join("")
  // t.split("").sort().join("")
  // for(let i=0; i < longer.length; i++){
  //   // console.log(s[i] , t[i])
  //   if(s[i] !== t[i]) {
  //     return longer[i]
  //   }
  // }
  //   return ""
  // return result
}
// "e"
findTheDifference("abcd", "abcde")
// findTheDifference("a","aa")
// // findTheDifference( "ymbgaraibk","ymbgaraibk")
