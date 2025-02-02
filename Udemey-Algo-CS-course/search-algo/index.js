function linearSearch(arr, target) {
  // indexOf , find , findIndex === 0(n)
  return arr.includes(target)
}
linearSearch([5, 2, 3, 1, 51, 12, 22])

/*linearSearch Psuedo code
  -[x] linear search psuedocode
  -[x] This func accepts an array and a value
  -[x] loop through the array and check if the current array element is equal to the value
  -[x] if it is, return the index at which the element is found
  -[x] if the value is never found , return - 1
*/
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1
}

// recursive
function linearSearchRecursive(arr, target) {
  let count = 0
  function helper(a, t) {
    if (a.length === 0) {
      count = -1
      return
    }
    if (a[0] === t) return count
    count++
    helper(a.slice(1), t)
  }
  helper(arr, target)
  return count
}
linearSearchRecursive([5, 2, 3, 1, 51, 12, 22], 222)

/*
 BST psuedo
 - this functions accepts a sorted array and a value
 - creat a left pointer at the start of the array, and a right    pointer at the end of the array
 - while the left pointer comes before the right pointer:
    - create a pointer in the middle
    - if you find the value you want, return the index
    - if the value is too small, move the left pointer up
    - if the value is too large , move the right pointer down
  - if you never find the value, return -1
*/
function BinarySearch(arr, target) {
  let l = 0
  let r = arr.length - 1
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (arr[mid] === target) return mid
    else if (arr[mid] < target) l = mid + 1
    else r = mid - 1
  }
  return -1
}
// BinarySearch([1,2,3,4,5], 2)

// recursive version
function bstRecursive(arr, target, l, r) {
  if (arr.length === 0) return -1
  // console.log(l, r)
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (arr[mid] === target) return mid
    if (arr[mid] < target) {
      return bstRecursive(arr, target, mid + 1, r)
    } else {
      return bstRecursive(arr, target, l, mid - 1)
    }
  }
  return -1
}
let test = [1, 2, 3, 4, 5]
bstRecursive(test, 11, 0, test.length - 1)

/*  Naive String Search
- suppose you want to count the number of times
- a smaller string appears in a longer string
- straigtforward approach 
- involves checking pairs of characters individually

Pseudocode
- Loop over the longer string
- Loop over the shorter string
- if the characters don't match, break out the inner loop
- if the characters do match , keep going
- if you complete the inner loop and find a match, 
  increment the count of   matches
- return the count
 */

function naiveSearchString(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // console.log(short[j] , long[i + j])
      if (short[j] !== long[i + j]) break // reset if  'i' is not matching j char
      if (j === short.length - 1) count++ // increment count if all letter in short string matches in long str
    }
  }
  return count
}
naiveSearchString("lorie loled", "lol")
