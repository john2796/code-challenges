/* nestedEvenSum
 - Write a recursive function,
 - Return the sum of all even numbers 
 - in an object which may contain nested objects.
*/

function flatten(obj) {
  obj = Object.values(obj)
  let newArr = []

  for (let val of obj) {
    if (typeof val === "object") {
      newArr = [...newArr, ...flatten(val)]
    } else {
      newArr.push(val)
    }
  }

  return newArr
}

function nestedEvenSum(obj) {
  // make func that flatten obj
  const flattenObj = flatten(obj)
  let total = 0

  console.log(flattenObj)
  // add up nums value
  for (let key in flattenObj) {
    if (typeof flattenObj[key] === "number" && flattenObj[key] % 2 === 0) {
      total += flattenObj[key]
    }
  }
  return total
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
}
// nestedEvenSum(obj1); // 6
nestedEvenSum(obj2) // 10
