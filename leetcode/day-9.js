/**
 * @param {number} n
 * @return {number}
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15

 */
var subtractProductAndSum = function(n) {
  let splitNumber = n + "".split("")
  let productDigits = 1
  let sumDigits = 0
  // console.log(productDigits, sumDigits)
  for (let i = 0; i < splitNumber.length; i++) {
    let num = splitNumber[i]
    productDigits *= Number(num)
    sumDigits += Number(num)
  }

  let result = productDigits - sumDigits
  return result
}
subtractProductAndSum(234)

/**
 * @param {number} num
 * @return {number}
 Return number of steps to reduce it to zero
 If the current number is even, divide by 2
 otherwise subtract 1
 


 Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
 */
var numberOfSteps = function(num) {
  let count = 0

  function checkN(n) {
    if (n == 0) return count
    if (n % 2 == 0) {
      n = n / 2
      count++
    } else {
      n = n - 1
      count++
    }
    checkN(n)
  }

  checkN(num)
  return count
}
numberOfSteps(14)
