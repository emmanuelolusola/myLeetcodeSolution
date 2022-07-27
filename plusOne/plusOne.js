function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + 1;

    if (digits[i] < 10) {
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
}

// TESTCASES
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 2, 3, 9]));
console.log(plusOne([]));
console.log(plusOne([1, 9, 9]));
