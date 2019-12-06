function linearSearch(arr, target) {
  // indexOf , find , findIndex === 0(n)
  return arr.includes(target)
}
linearSearch([5, 2, 3, 1, 51, 12, 22])

/*Psuedo code
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
function BinarySearchRecursive(arr, target, l, r) {
  if (arr.length === 0) return -1
  // console.log(l, r)
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (arr[mid] === target) return mid
    if (arr[mid] < target) {
      return BinarySearch(arr, target, mid + 1, r)
    } else {
      return BinarySearch(arr, target, l, mid - 1)
    }
  }
  return -1
}
let test = [1, 2, 3, 4, 5]
BinarySearchRecursive(test, 11, 0, test.length - 1)
