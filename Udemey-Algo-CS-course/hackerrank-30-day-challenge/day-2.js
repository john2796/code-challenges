/* DAY 2 Operator

Task 
 - calculate meal tip , tax , totalCost  , and return rounded value 

mealCost = 12 , 
tipPercent = 20, 
taxPercent = 8
calculation:
tip = 12 x 20/100 = 2.4
tax = 12 x 8/100 = 0.96
totalCost = mealCost + tip + tax = 15.36
round(totalCost) = 15
*/

function solve(meal_cost, tip_percent, tax_percent) {
  let totalCost
  tip_percent = (meal_cost * tip_percent) / 100
  tax_percent = (meal_cost * tax_percent) / 100
  totalCost = meal_cost + tip_percent + tax_percent
  console.log(Math.round(totalCost))
}
