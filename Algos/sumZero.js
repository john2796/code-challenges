/*
write a funciton called sumZero which accepts a sorted array of integers . The function should find the first pair where the sum is 0 . Return an array that includes both values that sum to zero or undefined if a pair does not exists



Step 1: Understand the Problem
  1.restate on your own word  / summarize
      - look for pair of nums that adds up to 0 
  2 input 
    - sorted array of integers
  3 output
    - array (both val that sum to zero)
    - undefined if pair does not exists


Step 2: Explore concrete example
  1 simple example
    - sumZero([-3, -2, -1, 0, 1,2,3]) // [-3,3]
    - sumZero([-2, 0 ,1 ,3]) undefined
    - sumZero([1,2,3]) undefined

  2 complex example
  3 empty inputs
    - other than [] ? or array of str , etc ...
  4 invalid inputs 
    - what if they didnt put num 



Step 3: Break it down ! 
Step 4: Solve and simplify
Step 5: Look back and Refactor
 */

// Naive solution O(n^2)
// function sumZero(arr){
//   for(let i = 0; arr.length; i++ ){
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[i] + arr[j] === 0){
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }
// sumZero([-3, -2, -1, 0, 1,2,3]) // [-3,3]

// O(N)

function sumZero(arr) {
  // make two pointer left , right
  let left = 0
  let right = arr.length - 1

  // loop through arr while left < right, keep going
  while (left < right) {
    // store sum
    let sum = arr[left] + arr[right]
    // if sum === 0 return [val1, val2]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      // else if sum > 0 move right pointer to left
      right--
    } else {
      // else move left pointer
      left++
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3,3]
