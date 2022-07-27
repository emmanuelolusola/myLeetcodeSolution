function lengthOfLastWord(s) {
  return s.trim().split(" ").pop().length;
}

// TESTCASES
console.log(lengthOfLastWord("This is Emmanuel Olusola"));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("  This is Mary Jane       "));
console.log(lengthOfLastWord(""));
