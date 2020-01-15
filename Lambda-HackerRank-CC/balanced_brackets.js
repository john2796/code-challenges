/*
STEP : 1 Understand the problem
  - restate on your own word
       Write a function  , that checks if the opening bracket has a pair of brackets
  - input 
      two arrays
  - output 
     Boolean

  STEP : 2 Explore concrete examples 
     Sample Input : 
        {[()]}
        {[(])}
        {{[[(())]]}}
    Sample Output :
        YES
        NO
        YES
  STEP : 3 Break it down
      Use STACK the last-in first-out (LIFO) principle. ... push adds an item to the top of the stack, pop removes the item from the top.
 
      comparing first item in the array with the last item
  STEP : 4 Solve / Simplify
  STEP : 5 Look back and refactor
  */
function isBalanced(s) {
  // turn string into array to get each character
  s = s.split("")
  let stack = []
  // use this to compare if pair is match
  let open = {
    "{": "}",
    "(": ")",
    "[": "]"
  }
  for (let i = 0; i < s.length; i++) {
    // if character is open bracket add it's value to stack
    if (s[i] in open) stack.push(s[i])
    else {
      // otherwise take the last item in the stack
      let recentOpen = stack.pop()
      // if value of open bracket is the same with the current closing
      // comparing closing
      if (open[recentOpen] !== s[i]) return "NO"
    }
  }
  return stack.length ? "NO" : "YES" //this is key, edge case could be that everything but one char is balanced
}
isBalanced("{[()]}")
isBalanced("{[(])}")
isBalanced("{{[[(())]]}}")
