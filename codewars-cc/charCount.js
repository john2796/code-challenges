/*
========================================================================
  Write a function which takes in a string and returns counts of each character in the string.
 ========================================================================

 ========================================================================
 Step 1 Understand Problem
 ========================================================================
     1. restate problem on your own word
             - Return count of each char 
     2. input
             - string
     3. output 
             - Number total of char
     4. enough info to solve ? 
             ???
     5. How should I label the important pieces of data that are a part of the problem ? -- what matters ?
            / ???


========================================================================
 Step 2 Explore Concrete Examples
========================================================================

     1. Simple Example
         charCount('aaaa')  {a:4}
         charCount('hello')  {h:1, e:1, l:2, o:1}
        
     2. Complex Example
       charCount("My PIN number is 182213")
              question to ask
                - do we care for upper / lower cases 
                - do we store white spaces 
     3. Empty Inputs
           charCount("")
           what should i return : null, undefined , error ... etc
     4. Invalid Inputs
           ex. {}, [], number , string ???

========================================================================
Step 3 : Break it Down !
========================================================================

  function charCount(str) {
          make object to return at end
          loop over string, for each character...
          if the char is a number/letter AND is a key in object, add one to count
          if the char is a number/letter AND not in object, add it to object and set value to 1
         if character is something else (space, period, etc) don't do anything
          return object at end
   }
 charCount("aaaa") //{a:4}

 */

// ========================================================================
// Step 4 : Solve / Simplify
// ========================================================================

/* VERSION 1 
function charCount(str) {
  // make object to return at end
  let obj = {}
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    // if character is something else (space, period, etc) don't do anything
    if (/[a-z0-9]/.test(char)) {
      // if the char is a number/letter AND is a key in object, add one to count
      if (obj[char] > 0) {
        obj[char] += 1
      }
      // else the char is a number/letter AND not in object, add it to object and set value to 1
      else {
        obj[char] = 1
      }
    }
  }
  // return object at end
  return obj
}
 */

// charCount("aaaa") //{a:4}
// charCount("hello") //  {h:1, e:1, l:2, o:1}
// charCount("My PIN number is 182213")

// Step 5: look Back and Refactor
// Final Solution
function charCount(str) {
  let obj = {}

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase()
      // if char is in object increment or 1
      obj[char] = ++obj[char] || 1
    }
  }

  // return object at end
  return obj
}

// Regex - Regular expression
function isAlphaNumericRegex(char) {
  // check for numbers / letters
  if (/[a-z0-9A-Z]/.test(char)) {
    return true
  }
  return false
}
// faster
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0)
  if (
    !(code > 47 && code < 58) && // numberic (0-9)
    !(code > 64 && code < 91) && // upper alhpa (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false
  }
  return true
}
console.log(charCount("HHHHello there!"))
