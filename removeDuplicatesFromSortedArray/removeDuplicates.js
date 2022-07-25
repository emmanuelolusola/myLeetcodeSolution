function removeDuplicates(nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[counter] = nums[i];
      counter++;
    }
  }
  return counter;
}

// TESTCASES
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(removeDuplicates([0]));
console.log(removeDuplicates([]));
