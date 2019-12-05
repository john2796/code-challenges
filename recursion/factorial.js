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
