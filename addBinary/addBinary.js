function addBinary(a, b) {
  let sum = "";
  let carry = 0;
  while (a || b || carry) {
    let add = +a.slice(-1) + +b.slice(-1) + carry;
    if (add > 1) {
      sum = (add % 2) + sum;
      carry = 1;
    } else {
      sum = add + sum;
      carry = 0;
    }
    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }
  return sum;
}

// TESTCASES
console.log(addBinary("11", "1"));
console.log(addBinary("1001", "10"));
console.log(addBinary("11111", "101"));
console.log(addBinary("1", "1"));
