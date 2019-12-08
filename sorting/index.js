function sort(arr) {
  return arr.sort((a, b) => a > b)
}
// sort ascending order
sort([23, 45, 6, 12, 13])

// sort by length
function sortByLength(arr) {
  return arr.sort((a, b) => a.length > b.length)
}
// sort ascending order
sortByLength(["miiko", "pogi", "is ", "in ", "the", "house"])
