function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let i = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i--] = nums1[p1--];
    } else {
      nums1[i--] = nums2[p2--];
    }
  }
  return nums1;
}

// TESTCASES
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
