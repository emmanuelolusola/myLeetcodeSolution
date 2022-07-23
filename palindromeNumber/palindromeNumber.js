function isPalindrome(n) {
  if (n < 0) return false; // edge case
  let reverse = 0;

  for (let val = n; val >= 1; val = Math.floor(val / 10)) {
    reverse = reverse * 10 + (val % 10);
  }
  return reverse === n;
}

// TEST CASES
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(1441));
console.log(isPalindrome(10));
