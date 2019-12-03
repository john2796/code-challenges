/*
Write a function called findLongestSubstring, which accepts a string and returns the lenght of the longest substring with all distinct characters

Time Complexityt - O(n)
*/
// input: string
// output : length of the longest substring  with all distinct char
function findLongestSubstring(str) {
  let p1 = 0
  let p2 = 0
  let longest = 0
  let seen = {}
  /*
 seen = {
   a:7,
   b:1,
   c:2,
   d:3,
   e:4,
   f:5,
   g:6,
   x:9,
   z:10
 }
 */
  // a b c d e f g a x x z
  //                   p1
  //                     p2
  while (p2 < str.length) {
    let char = str[p2] // a

    // char indices is number and val >= p1 (make sure it's still in window)
    if (typeof seen[char] === "number" && seen[char] >= p1) {
      // "Jump" p1 to location of the duplicate character to put it on the "edge" of the window.
      p1 = seen[char] + 1
      // Reassign the mapped index of the (once again unique) character to the current value of our leading pointer, p2.
      seen[char] = p2
    } else {
      seen[char] = p2
    }
    // We continually move our leading pointer forward.
    p2++
    // Determine length of current substring & update max if applicable.
    longest = Math.max(longest, p2 - p1)
  }
  return longest
}
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
findLongestSubstring("thisishowwedoit") // 6
/*
 longest = 3
 seen = {
  t:4,
  ..
  ..
  s:5,
 }
 0  1  2  3  4  5  6  7  8  9 
 t  h  i  s  i  s  h  o  w  w  e  d  o  i  t 
                  p1
                        p2

*/
