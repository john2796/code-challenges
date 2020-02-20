/*Longest Consecutive Characters 


Given a string, find the longest subsequence consisting of a single character.  Example: longest("ABAACDDDBBA") should return {'D': 3}.

*/

function longestConsecutive(s) {
  let max_char = null // save the char that has max count
  let prev_char = null
  let max_count = 0
  let count = 0

  for (let current of s) {
    if (prev_char === current) {
      count += 1
    } else {
      count = 1
    }
    if (count > max_count) {
      max_count = count
      max_char = current
    }
    prev_char = current
  }
  return { max_char: max_count }
}
longestConsecutive("aaaaa") // {b:3}
/*
  a a b c d d b b b e a
  let current = 'b'
  let max_char = 'a' // save the char that has max count
  let max_count = 2
  let prev_char = 'a'
  let count = 1
  */
