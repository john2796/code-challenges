/* Multiple Pointers - averagePair

Write a function called averagePair. Given a sorted array of integers and a target average, determin if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constrains : 
 Time: O(N)
 Space: O(1)

Step 1: 
1. restate problem:
- determin if there is a pair of values in the array where the average of the pair equals the target average
    
2. input 
  - sorted array of integers, and target(average)
3. output
 - boolean 

 Step 2 
  1. exmple
      averagePair([ 1,2,3 ], 2.5)// true
      averagePair([ 1,3,3,5,6,7,10,12,19 ], 8) // true
      averagePair([ -1, 0,3,4,5,6 ], 4.1) // false
      averagePair([], 4) // false

  2. empty inputs
  3. invalid inputs
 */

function averagePair(arr, target) {
  if (arr.length === 0) return false
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2
    // console.log(arr[left], "+", arr[right], "/ 2")
    // console.log(average, target)
    if (average === target) {
      return true
    } else if (average > target) {
      right--
    } else {
      left++
    }
  }

  return false
}

// averagePair([ 1,2,3 ], 2.5)// true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
// averagePair([ -1, 0,3,4,5,6 ], 4.1) // false
// averagePair([], 4) // false
