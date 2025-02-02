/* Frequency Counter Pattern : example


 Question:
  Write a function called same , which accepts two arrays . The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency value must be the same 


  STEP : 1 Understand the problem
    1. restate on your own word
      - Write a function same , that accepts two arrays that returns true if every value are corresponding squared (2nd) is the same
   2. input 
     - two arrays
  3 output 
    Boolean

  STEP : 2 Explore concrete examples 
  1 . Simple example :
    same( [1,2,3], [4,1,9] ) // true
    same( [1,2,3], [ 1,9] ) // false
    same( [1,2,1], [ 4,4,1] ) // false ( must be same frequency )
    - position on the second array doesn't matter
    - has to have same length 
    - the squared value on the first arr has to correspond on the 2nd array
  
  2.  Complex example :
  3.  empty inputs
  4.  Invalid inputs , other than []

  STEP : 3 Break it down

  function same(arr1 , arr2) {
    // goal is to compare first arr to 2nd arr
    // before we compare 1st arr to 2nd arr we need to squared first
    
    // we loop through first array 
        - if the length is the same 
          - grab each item in the array compare with arr2 items
        - else 
           - return false

    // assume second arr2 is always squared 
    /// return false if we don't hit same frequency
  }

  STEP : 4 Solve / Simplify
  STEP : 5 Look back and refactor
 */

function same(arr1, arr2) {
  // check if length are same
  if (arr1.length !== arr2.length) return

  // store 2 arr to object
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  // loop through array and store them in the object
  // count how many times val exists
  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1
  }
  console.log(frequencyCounter1, frequencyCounter2)

  // loop through first object
  for (let key in frequencyCounter1) {
    // the key value correspond ?
    // first squared key then check if it does not exists on object2
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    // the count of how many times they exists correspond ?
    // comparing their values the squared version and original
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }

  return true
}

same([1, 2, 3], [4, 1, 9])
