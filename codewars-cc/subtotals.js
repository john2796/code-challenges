function subtotals(array) {
  var subtotalArray = Array(array.length) //[ <5 empty items> ]

  for (var i = 0; i < array.length; i++) {
    var subtotal = 0
    for (var j = 0; j <= i; j++) {
      subtotal += array[j]
    }
    subtotalArray[i] = subtotal
  }

  return subtotalArray
}
// Runtime O(n^2)
console.log(subtotals([1, 2, 3]))
