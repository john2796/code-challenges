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


function validAnagram(first, second){
  if(!first.length !== second.length) return false;
  const lookup = {}
  // loop first str
  for (let i = 0 ; i < first.length; i++){
    let letter = first[i]
    // if letter exists ,increment ,o therwise set to 1
    lookup[letter] = ++lookup[letter] || 1
  }
 for(let i =0; i < second.length; i++){
   let letter second[i]
   // can't find letter or letter is zero then it's not an    anagram
   // when encounter with 0 falsey return false
   if(!lookup[letter]){
     return false
   } else {
     // ? subtract 1 untill it's sets to 0
     lookup[letter] -= 1
   }
 }
return true;
}