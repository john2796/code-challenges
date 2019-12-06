// Find all number and convert to string
function stringifyNumbers(obj) {
  let newObj = {}
  for (let key in obj) {
    let val = obj[key]
    if (typeof val === "number") {
      newObj[key] = val + ""
    } else if (typeof val === "object" && !Array.isArray(val)) {
      newObj[key] = stringifyNumbers(val)
    } else {
      newObj[key] = val
    }
  }

  return newObj
}
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}
stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
