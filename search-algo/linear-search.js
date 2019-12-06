function linearSearch(arr, target) {
  // indexOf , find , findIndex === 0(n)
  return arr.includes(target)
}
linearSearch([5, 2, 3, 1, 51, 12, 22])

function linearSearch(arr, target) {
  // linear search psuedocode
  // This func accepts an array and a value
  // loop through the array and check if the current array element is equal to the value
  for (let i = 0; i < arr.length; i++) {
    // if it is, return the index at which the element is found
    if (arr[i] === target) {
      return i
    }
    // if the value is never found , return - 1
  }
  return -1
}

// recursive
function linearSearchRecursive(arr, target) {
  let count = 0
  function helper(a, t) {
    if (a.length === 0) return -1
    if (a[0] === t) {
      return count
    }
    count++
    helper(a.slice(1), t)
  }
  helper(arr, target)
  return count
}
linearSearchRecursive([5, 2, 3, 1, 51, 12, 22], 51)
