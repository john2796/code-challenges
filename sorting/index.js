function sort(arr) {
  return arr.sort((a, b) => a > b)
}
sort([23, 45, 6, 12, 13]) // sort ascending order

function sortByLength(arr) {
  return arr.sort((a, b) => a.length > b.length)
}
sortByLength(["miiko", "pogi", "is ", "in ", "the", "house"]) // sort by length
