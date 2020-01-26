/*
Day 3: Intro to Conditional Statements
*/

// let N = 4 // Not Weird
// let N = 3 // Weird
// let N = 24 // Not weird
let N = 18 // Weird
// If N is odd, print Weird
if (N % 2 !== 0) console.log("Weird")
// If N is even and in the inclusive range of 2 to 5, print Not Weird
if (N % 2 === 0 && N >= 2 && N <= 5) console.log("Not Weird")
// If N is even and in the inclusive range of 6 to 20, print Weird
if (N % 2 === 0 && N >= 6 && N <= 20) console.log("Weird")
// If N is even and greater than 20, print Not Weird
if (N % 2 === 0 && N > 20) console.log("Not Weird")
