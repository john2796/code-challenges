/*
Write a func , which accepts a number and adds up all the numbers from 0 to the number passed to the function 
6 + 5 + 4 + 3 + 2 + 1 
  11 + 4 + 3 + 2 + 1
    15 + 3 + 2 + 1
     18 + 2 + 1
     20 + 1
     21

*/

function recursiveRange(n) {
  if (n == 1) return 1
  return n + recursiveRange(n - 1)
}

recursiveRange(6) // 21
// recursiveRange(10) // 55
