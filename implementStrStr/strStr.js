function strStr(haystack, needle) {
  if (needle.length === 0 || needle === haystack) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }
  return -1;
}

// TESTCASES
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("anaconda", "con"));
console.log(strStr("hello", "hello"));
console.log(strStr("hello", ""));
