/*  MULTIPLE POINTERS PATTERN

countUniqueValues

Implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always sorted



Step 1: Understand the Problem
  1.restate on your own word  / summarize
      - counts the unique values in the array

  2 input 
    - sorted array of integers
  3 output
    - return count of unique value 


Step 2: Explore concrete example
  1 simple example
    countUniqueValues([ 1,1,1,1,1,2 ]) // 2
    countUniqueValues([ 1,2,3,4,4,4,7,7,12,12,13 ]) // 7
    countUniqueValues([ ]) // 0
    countUniqueValues([ -2,-1,-1,0,1 ]) // 4

  2 complex example
  3 empty inputs ?
    return 0
  4 invalid inputs ? 
    

Step 3: Break it down ! 
  - Use Multiple pointer pattern
  - 
Step 4: Solve and simplify
Step 5: Look back and Refactor
 */
// // my solution
function countUniqueValues(arr) {
  // return 0 if the arr is empty
  if (arr.length === 0) return 0

  let left = 0
  let right = 1
  let count = 0

  while (left < arr.length - 1) {
    if (arr[left] === arr[right]) {
      right += 1
      left++
    } else {
      right += 1
      left++
      count++
    }
  }

  return count + 1
}

function countUniqueValue1(arr) {
  if (arr.length === 0) return 0

  let i = 0
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

// using while loop
function countUniqueValues(arr) {
  if (arr.length === 0) return 0

  let i = 0
  let j = 0

  while (j < arr.length - 1) {
    // loop through the length of the arr
    j++
    // if they are not equal , increment, replace i = j
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
// countUniqueValues([ 1,1,1,1,1,2 ]) // 2
// countUniqueValues([ 1,2,3,4,4,4,7,7,12,12,13,22,21 ]) // 9
// countUniqueValues([ ]) // 0
// countUniqueValues([ -2,-1,-1,0,1 ]) // 4

// instructor solution
