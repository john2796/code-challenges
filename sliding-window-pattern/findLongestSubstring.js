/*
Write a function called findLongestSubstring, which accepts a string and returns the lenght of the longest substring with all distinct characters

Time Complexityt - O(n)
*/
// input: string  
// output : length of the longest substring  with all distinct char
function findLongestSubstring(str){
  
  // if empty return 0
if(str.length === 0 ) return 0

 let longest = 0;
 let start = 0;
 let seen = {};

for(let i = 0; i<str.length; i++){
  let char = str[i]
  if(seen[char]) {
    start = Math.max(start, seen[char])
  }

  // index - beginning of substring + 1 (to include current)
  longest = Math.max(longest, i - start + 1)
  // STORE the index of the next char so as to not double 
  seen[char] = i + 1;
}
  return longest
}
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6




