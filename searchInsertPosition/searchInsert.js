function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const point = nums[mid];

    if (point > target) {
      right = mid - 1;
    } else if (point < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return right + 1;
}

// TESTCASES
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([], 5));
