function addUpTo(n) {
  // accumulator
  let total = 0

  for (let i = 1; i < n; i++) {
    // console.log(`${total} + ${i} =`)
    total += i
    // console.log(`${total}`)
  }
  return total
}

// let t1 = performance.now()
addUpTo(5)
// let t2 = performance.now()
// console.log(`Time elapsed: ${(time2 - time1) / 1000} seconds.`)
