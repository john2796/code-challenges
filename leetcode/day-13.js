/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var len = m + n
  m--
  n--
  while (len--) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[len] = nums1[m--]
    } else {
      nums1[len] = nums2[n--]
    }
  }
  console.log(nums1)
}
// merge([1,2,3,0,0,0], 3, [2,5,6], 3);
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
// [1,2,2,3,5,6]
