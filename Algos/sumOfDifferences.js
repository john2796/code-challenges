/*
Question :
Your task is to sum the differences between consecutive pairs in the array in descending order.


For example: sumOfDifferences([2, 1, 10]) Returns 9
Descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9


Step 1 Understanding the problem
 1. restate problem on my own word
    - Descending order: [10, 2, 1]
    - Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

  - once the array is in largest - smallest (descending order) i have to subtract in pairs and add total sum of differences

 2. input ?
   - array
 3. output ?
  - total when adding pairs 
 4 enough info to solve problem ? 


 Step 2 Explore concrete examples
  1. simple example 
        sumOfDifferences([1, 2, 10]), returns 9
        sumOfDifferences([-3, -2, -1]), returns 2 
           (-3 - -2 ) + (-2 - -1 ) = 2

  2. complex example 
      [-14,7,0,-6,-12,4,7,-3,-8,3,-11,4,0,-9,4,11,11,-13,2,11,-6,3,12,-2,12,-3,-9,-3,-3]
      Expected: 26,

  3.  Empty inputs 
      - If the array is empty or the array has only one element the result should be 0 
  4.  Invalid inputs
      - undefined , when it hits the end of array
      - for example [1,2,3, undefined]


// Step 3 Break it Down 
  function sumOfDifferences(arr) {
  - If the array is empty or the array has only one element the result should be 0 
    // sort array descending
    // add difference
    //  return result
}


// Step 4 Solve/Simplify


// Step 5 Look Back and Refactor
*/

function sumOfDifferences(arr) {
  // If the array is empty or the array has only one element the result should be 0
  if (arr.length <= 1) return 0
  // sort array largest to smallest (descending order)
  arr = arr.sort(function(a, b) {
    return b - a
  })

  let results = 0
  // loop , add difference
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1])
    results += diff
  }
  //  return result
  console.log(results)
  return results
}
sumOfDifferences([1, 2, 10]) //returns 9
sumOfDifferences([
  -14,
  7,
  0,
  -6,
  -12,
  4,
  7,
  -3,
  -8,
  3,
  -11,
  4,
  0,
  -9,
  4,
  11,
  11,
  -13,
  2,
  11,
  -6,
  3,
  12,
  -2,
  12,
  -3,
  -9,
  -3,
  -3
])

// Expected: 26,
