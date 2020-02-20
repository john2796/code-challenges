/*
collectString
- which accepts an object and returns an array of all the values in the object that have type of string

*/

function collectStrings(obj) {
  let newArr = []

  function flatten(oj) {
    for (let key in oj) {
      let x = oj[key]
      if (typeof x === "string") {
        newArr.push(x)
      } else if (typeof x === "object") {
        return flatten(x)
      }
    }
  }

  flatten(obj)
  return newArr
}
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])
