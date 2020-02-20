/*
Problem :
- Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits

Solution must be : O(N)

Step 1 : understand the problem 
 1. restate on your own word 
    - find if they're same number 
 2. input 
    - two positive integers
 3  output
    - boolean



 Step 2 : Explore concrete examples 
    sameFrequency(182, 281)
    sameFrequency(3589578, 5879385)
    sameFrequency(22, 222)

  2. empty inputs ? 
  3  invalid inputs ?


Step 3 Break it down : 
  - Use Frequency Counter Pattern
  - convert to string first 
  - Check their length 

  // store in both in object



  // loop, check - count , value 
 */

// function sameFrequency(num1, num2) {
//   // - Use Frequency Counter Pattern
//   // - convert to string first 
//   num1 = num1+''
//   num2 = num2+''
//   // - Check their length 
//   if(num1.length !== num2.length ) return false


//   // store in both in object
//     let obj1 = {}
//     let obj2 = {}

//     for(let num of num1){
//       obj1[num] = ++obj1[num] || 1
//     }
//     for(let num of num2){
//       obj2[num] = ++obj2[num] || 1
//     }
//   // loop, check - count , value 

//   console.log(obj1, obj2)
//   for(let num in obj1){
//     if( !(num in obj2) ){
//       return false
//     }
//     if( obj2[num] !== obj1[num]){
//       return false
//     }
//   }

//   return true 
// }


function sameFrequency(num1, num2) {
  num1 = num1+''
  num2 = num2+''
  // - Check their length 
  if(num1.length !== num2.length ) return false

  let lookup = {}

// loop first string and store them in lookup object
  for(let i = 0; i < num1.length; i++) { 
    let num = num1[i]
    lookup[num] = ++lookup[num] || 1
  }


// loop second string
  for (let i = 0 ; i < num2.length; i++){
    let num = num2[i]

    // check if num2 values does not exists in lookup
    if(!lookup[num]) {
      return false
    } else {
      // if it does subtract 1 from it until it hit 0
      lookup[num] -= 1
    }
  }
  return true
}
     sameFrequency(182, 281)
    // sameFrequency(3589578, 5879385)
    // sameFrequency(22, 222) 
    // sameFrequency(34, 14) 
