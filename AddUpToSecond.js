function addUpToSecond(n) {
  // constant time
  /* PEMDAS -> Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. 
     5 * ( 5 + 1 ) / 2
     5 * 6 / 2 
     30 / 2 
     15
   */
  return (n * (n + 1)) / 2

  // n2 solution
  // 0 + 1 = 1
  // 1 + 2 = 3
  // 3 + 3 = 6
  // 6 + 4 = 10
  // 10 + 5 = 15
}
addUpToSecond(5)
