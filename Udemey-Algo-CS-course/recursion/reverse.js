/* reverse
 - Write a func, which accepts a string and returns a new string in reverse
*/
function reverse(str) {
  let reverseStr = ""
  function helper(s) {
    // base
    if (s.length === 0) return
    reverseStr += s[s.length - 1]
    // different input
    helper(s.slice(0, s.length - 1))
    // helper(s)
  }
  helper(str)
  return reverseStr
}
reverse("awesome") // 'emosewa'
// let test = 'awesome'
// test.slice(0, test.length -1)
// reverse('rithmschool') // 'loohcsmhtir'
