function validParentheses(s) {
  if (s.length === 0) return null;
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const arr = [];

  for (let ch of s) {
    if (map[ch]) {
      arr.push(map[ch]);
    } else if (arr.length > 0 && arr[arr.length - 1] === ch) {
      arr.pop();
    } else {
      return false;
    }
  }
  return arr.length === 0;
}

// TESTCASES
console.log(validParentheses("()"));
console.log(validParentheses("()[]{}"));
console.log(validParentheses("(]"));
console.log(validParentheses("({])"));
console.log(validParentheses(""));
