function climbingStairs(n) {
  const steps = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n];
}

// TESTCASES
console.log(climbingStairs(2));
console.log(climbingStairs(6));
console.log(climbingStairs(0));
console.log(climbingStairs(24));
