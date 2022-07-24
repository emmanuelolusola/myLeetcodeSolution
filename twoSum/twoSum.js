function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let numOne = nums[i];
    let numTwo = target - numOne;

    if (map.has(numTwo)) return [i, map.get(numTwo)];
    map.set(numOne, i);
  }
  return null;
}

// TESTCASES
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([], 10));
console.log(twoSum([2, 4, 9], 10));
