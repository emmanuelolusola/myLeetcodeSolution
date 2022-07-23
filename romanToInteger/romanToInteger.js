function romanToInteger(s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  s.split("").forEach((letter, index) => {
    if (obj[letter] < obj[s[index + 1]]) {
      result -= obj[letter];
    } else {
      result += obj[letter];
    }
  });
  return result;
}

// TEST CASES
console.log(romanToInteger("III"));
console.log(romanToInteger("IV"));
console.log(romanToInteger("MIXXC"));
console.log(romanToInteger("CDM"));
