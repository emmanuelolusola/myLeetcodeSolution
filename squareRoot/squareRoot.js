function sqrt(x) {
  if (x < 2) return x;

  let left = 1;
  let right = x;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    }
  }
  return left - 1;
}

// TESTCASES
console.log(sqrt(25));
console.log(sqrt(169));
console.log(sqrt(1));
console.log(sqrt(14));
