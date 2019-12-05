// Factorial recursion
// 4! = 4 * 3 * 2 * 1
//          12 *  2  * 1
//          24
// 5! = 5 * 4 * 3 * 2 * 1
//      20 * 3 * 2 * 1
//      60 * 2 * 1
//      120

function factorialRecursion(num) {
  // base
  if (num === 1) {
    return 1
  }
  return num * factorialRecursion(num - 1)
}
// factorialRecursion(5)
// --- factorial of 5 ---
// 5 * factorialRecursion(4)                   (24*5)
//     4 * factorialRecursion(3)               (4*6) 24
//         3 * factorialRecursion(2)           (3*2) 6
//               2 * factorialRecursion(1)     (1*2) 3
//                                  return 1
// --- factorial of 4 ---
// 4 * factorialRecursion(3)               (4*6) 24
//      3 * factorialRecursion(2)          (3*2) 6
//           2 * factorialRecursion(1)     (1*2) 3
//                                  return 1

// Factorial iterative
function factorialIterative(num) {
  let result = 1
  for (let i = num; i > 1; i--) {
    result *= i
  }
  return result
}
factorialIterative(5)

/* Factorial Recursion 

 - A factorial is the product of an integer and all the integers below it 
 - e.g factorial four (4!) === 24, 4 * 3 * 2 * 1
 - factorial zero (0!) is always 1  
*/

function factorialRecursion(n) {
  if (n === 0 || n === 1) return 1
  return n * factorialRecursion(n - 1)
}

// factorialRecursion(1) // 1
// factorialRecursion(2) // 2
// factorialRecursion(4) // 24
// factorialRecursion(7) // 5040

/*
n * factorialRecursion(n -1)
  4 * factorialRecursion(3)      (4*6) 24
    3 * factorialRecursion(2)    (3*2)
      2 * factorialRecursion(1)  (2*1)
          return 1
*/
