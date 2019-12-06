function search(arr, target) {
  let min = 0
  let max = arr.length - 1
  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    if (target === arr[middle]) {
      return middle
    } else if (arr[middle] < target) {
      min = middle + 1
    } else {
      max = middle - 1
    }
  }
  return -1
}

search([1, 2, 3, 4, 5, 6], 1)
