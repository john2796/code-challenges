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
