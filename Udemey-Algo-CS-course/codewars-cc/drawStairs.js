/*  Step 4 Solve / Simplify

 1. find core difficulty in what you're doing 
     - switching the last "I\n" to "I"
 2. ignore difficulty for now
 3. simplified solution
 4. Add difficulty back
*/

function drawStairs(n) {
  if (n === 1) return "I"
  let result = ""

  for (let i = 1; i <= n; i++) {
    // check if i is equal to last item
    let stairs = i === n ? "I" : "I\n"
    // ignore _/whitespce on first I (i - 1)
    result += " ".repeat(i - 1) + stairs
  }
  //   console.log(result === "I\n_I\n__I")
  return result
}
