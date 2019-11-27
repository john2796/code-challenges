function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2)) // O(?)
  for (var i = 0; i < array.length; i++) {
    // O(n)
    if (i % 2 === 0) {
      newArray[i / 2] = array[i] // O(1)
    }
  }
  return newArray
}

console.log(onlyElementsAtEvenIndex([0, 1, 2, 3, 4])) // [ 0, 2, 4 ]
