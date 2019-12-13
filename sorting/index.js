function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

function sort(arr) {
  return arr.sort((a, b) => a > b)
}
sort([23, 45, 6, 12, 13]) // sort ascending order

function sortByLength(arr) {
  return arr.sort((a, b) => a.length > b.length)
}
sortByLength(["miiko", "pogi", "is ", "in ", "the", "house"]) // sort by length

/* BubbleSort O(n^2) */
function bubbleSort(arr) {
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}
bubbleSort([37, 45, 29, 8, 12, 88, -3])

/* Selection Sort  O(n^2) 
- store the first elem as the smallest value you've seen so far.
- compare next item i + 1, so it doesn't compare 0 - 0, 1 - 1, etc...
- compare this item to the next item in the array until you find a smaller number.
- if a smaller number is found , designated that smaller num to new 'minimum' and continue until end of arr.
- if the 'min' is not the val(index) you initially began with, swap the two values
- repeat this with the next element until the array is sorted

*/
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j
    }
    if (i !== lowest) swap(arr, i, lowest)
  }
  return arr
}
selectionSort([5, 3, 4, 1, 2])

/* insertionSort  O(n^2) 
  - start by picking the second element in the array
  - now compare the second element with the one before it and swap if necessary
  - continue to the next element and if it is in the incorrect order, iterate throguh the sorted portion (i.e the left side) to place the element in the correct place.
  - Repeat until the array is sorted.
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
    console.log(arr)
  }
  return arr
}
/* 
  2,1,9,76,4
  2 > 1 ? yes , swap
  1,2,9,76,4
  2>9 ? no
  9>76 ? no
  76>4 yes , swap
*/

insertionSort([2, 1, 9, 76, 4])
/* Merging Arrays Pseudocode 
- create an empty array , take a look at the smallest values in each input array.
- while there are still values we haven't looked at...
   - if the value in the first array is smaller than the value in the second array , push the value in the first arry into the second array, push the value in the first array into our results and move on to the next value in the second array
   - Once we exhaust one array, push in all remaining values from the other array
*/
function merge(arr1, arr2) {
  let results = []
  let p1 = 0
  let p2 = 0
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr2[p2] > arr1[p1]) {
      results.push(arr1[p1])
      p1++
    } else {
      results.push(arr2[p2])
      p2++
    }
  }

  while (p1 < arr1.length) {
    results.push(arr1[p1])
    p1++
  }
  while (p2 < arr2.length) {
    results.push(arr2[p2])
    p2++
  }
  return results
}
merge([1, 10, 50], [2, 14, 100])

function mergeSort(arr) {
  // base
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  //different input
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  console.log(left, right)

  return merge(left, right)
}
mergeSort([10, 24, 76, 73])
