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
