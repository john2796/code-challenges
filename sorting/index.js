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
  //when the code is sorted already break out the loop
  let noSwaps
  // looping backwards , helps unecessary comparison, we need to use i for inner loop
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      // shrinking the end by 1 , to prevent from comparing to undefined(j+1) and the large num at the end
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j] // SWAP!
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}
bubbleSort([37, 45, 29, 8, 12, 88, -3])

function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}
/* Selection Sort  O(n^2) */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // store the first elem as the smallest value you've seen so far.
    let lowest = i
    // compare next item i + 1, so it doesn't compare 0 - 0, 1 - 1, etc...
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j)
      // compare this item to the next item in the array until you find a smaller number.
      if (arr[j] < arr[lowest]) {
        // if a smaller number is found , designated that smaller num to new 'minimum' and continue until end of arr.
        lowest = j
      }
    }
    // if the 'min' is not the val(index) you initially began with, swap the two values
    if (i !== lowest) {
      swap(arr, i, lowest)
    }
    // repeat this with the next element until the array is sorted
  }
  return arr
}
selectionSort([5, 3, 4, 1, 2])
