function collectOddValues(arr) {
  let result = []

  // base case
  if (arr.length === 0) return

  if (arr[0] % 2 !== 0) {
    result.push(arr[0])
  }

  // different input
  result = result.concat(collectOddValues(arr.slice(1)))
  return result
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])
