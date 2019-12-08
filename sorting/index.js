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
  let noSwaps //when the code is sorted already break out the loop
  for (let i = arr.length; i > 0; i--) {
    // looping backwards , helps unecessary comparison
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      // shrinking the end by 1 , to prevent from comparing to undefined(j+1) and the large num at the end
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        console.log("swap")
        let temp = arr[j]
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
