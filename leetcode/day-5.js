/**
 * @param {number} numRows
 * @return {number[][]}\
 
    Task : generate pascal triangle like show in diagram
    
    observation : 
      1. the number of array and length of the array is equivalent to the input.
      2. All the number starts and end with 1.
      3. empty value are being made by the value of first 2 values sum
      
      
 */
var generate = function(numRows) {
  // i,j = i-1,j-1 + i-1,j
  var solution = []
  for (var i = 0; i < numRows; i++) {
    solution[i] = []
    for (var j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        solution[i][j] = 1
      } else {
        solution[i][j] = solution[i - 1][j - 1] + solution[i - 1][j]
      }
    }
  }
  return solution
}

console.log(generate(5))

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x))
}

/**
 * @param {number} n
 * @return {string}
 */
