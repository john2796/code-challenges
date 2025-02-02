/*
Write a recursive func , 
- which accepts a number and returns the nth number in the fibonacci sequence. 
- Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 
- which starts with 1 and 1  ,
- and where every number there after is equal to the sum of the previous two n–umbers

step 1 Understanding the problem 
  The Fibonacci Sequence is the series of numbers:
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
     1 + 1 2 + 3 5 + 8 13
  The next number is found by adding up the two numbers before it.

  The 2 is found by adding the two numbers before it (1+1)
  The 3 is found by adding the two numbers before it (1+2),
  And the 5 is (2+3),
  and so on!
*/
var recursive = function(n) {
  if (n <= 2) {
    return 1
  }

  return recursive(n - 1) + recursive(n - 2)
}
console.log(recursive(4))
// 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
