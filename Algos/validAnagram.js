function validAnagram(str1, str2) {
  // compare length
  if (str1.length !== str2.length) return

  // follow frequency pattern
  let obj1 = {}
  let obj2 = {}

  // store str to obj
  for (let letter of str1) {
    // count how many times letters dups
    obj1[letter] = ++obj1[letter] || 1
  }
  for (let letter of str2) {
    // count how many times letters dups
    obj2[letter] = ++obj2[letter] || 1
  }

  // loop str1
  for (let key in obj1) {
    // compare key values
    if (!(key in obj2)) {
      return false
    }
    // compare count of letters values
    if (obj2[key] !== obj1[key]) {
      return false
    }
  }

  // return true if all case passes
  return true
}

validAnagram(" ", " ")
validAnagram("aaz", "zza")
validAnagram("anagram", "nagaram")
