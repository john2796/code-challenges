// Time Complexity : O(n)2 Space Complexity : O(n)
// Approach #2
//Time Complexity : O(n)2 Space Complexity : O(n)
function threeNumbersum(arr, targetSum) {
  let output = []
  let sortedArr = quickSort(arr, 0, arr.length - 1)
  for (let i = 0; i < sortedArr.length; i++) {
    let left = i + 1,
      right = sortedArr.length - 1
    while (left < right) {
      let sum = sortedArr[i] + sortedArr[left] + sortedArr[right]

      if (sum == targetSum) {
        output.push([sortedArr[i], sortedArr[left], sortedArr[right]])
        right -= 1
        left += 1
      } else if (sum > targetSum) {
        right -= 1
      } else if (sum < targetSum) {
        left += 1
      }
    }
  }
  return output
}

// O(n)
function quickSort(arr, left, right) {
  var len = arr.length,
    pivot,
    partitionIndex

  if (left < right) {
    pivot = right
    partitionIndex = partition(arr, pivot, left, right)

    //sort left and right
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}
function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
    partitionIndex = left

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(arr, right, partitionIndex)
  return partitionIndex
}
function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
threeNumbersum([12, 3, 1, 2, -6, 5, -8, 6], 0)
