/* Multiple Pointers - averagePair

Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.

Bonus Constrains : 
 Time: O(N)
 Space: O(1)

Step 1: 
1. restate problem:
- check whether the characters in the the first string appear somewhere in the second string, without changing their order

    
2. input 
  - two strings
3. output
  - boolean
 

 Step 2 

  2. empty inputs
  3. invalid inputs
 */

function isSubsequence(str1, str2) {
  // Use multiple pointer pattern
  // Time Complexity - O(N)
  // Space Complexity - O(1)
  // Check whether the characters in the first string appear somewhere in the    second string, without order changing

  // check for empty str
  if (str1.length === 0 || str2.length === 0) return false
  let i = 0
  let j = 0

  // loop through second str
  while (j < str2.length) {
    console.log(str1[i], str2[j])
    // check if the char is the same, then advance to next char
    if (str1[i] === str2[j]) {
      i++
    }
    // check if you traverse the length of str1, then return true
    if (i === str1.length) return true
    j++
  }
  return false
}

// isSubsequence('hello', 'hello world') //true
// isSubsequence('sing', 'sting') //true
// isSubsequence('abc', 'abracadabra') //true
// isSubsequence('abc', 'acb') //false
