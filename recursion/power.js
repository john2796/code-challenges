// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(e, b) {
  // base case
  if (e < 1 || b === 0) return 1
  return b * power(e - 1, b)
}

// power(2,0) // 1
// power(2,2) // 4
power(2, 4) // 16 --> 4^2
/*
  b * power(e,b)
    4 * power(2)     (4*4)  
      4 * power(1)   (4*1)
               return 1
*/
