/*
Task 
- [x] Declare 3 variables: one type int , one of type double, and one of type String.
- [] read 3 lines of input from stdin(according to the sequence given in the input Format)
- [] Use the + operator to perform the following operations:
    - [] print the sum of i plus your int variable on a new line 
    - [] print the sum of d plus your doable variable to a scale of one decimal place on a new line.
    - [] concatenate s with the string you read as input and print the result on new line 

  Sample input 
  12 
  4.0
  is the best place to learn and practice coding!

  Sample output
  16
  8.0
  HackerRank is the best place to learn and practice coding!


  Explanation
  when we sum the integers 4 and 12, we get the integer 16.
  when we sum the floating-point numbers 4.0 and 4.0, we get 8.0 
  when we concatenate HackerRank with is the best to learn and practice
  coding!, we get HackerRank is the ....

*/

function main() {
  var i = 4
  var d = 4.0
  var s = "HackerRank "
  // Declare second integer, double, and String variables.
  var i2 = 0
  var d2 = 0
  var s2 = ""
  // Read and save an integer, double, and String to your variables.
  i2 = input_stdin
  d2 = input_stdin_array
  s2 = input_currentline
  // Print the sum of both integer variables on a new line.
  console.log(i + i2)
  // Print the sum of the double variables on a new line.
  console.log(d + d2)
  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + s2)
}
