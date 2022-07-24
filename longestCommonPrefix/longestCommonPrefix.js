function longestCommonPrefix(strs) {
  if (strs.length === 0) return ""; // edge case

  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0].charAt(i);
    for (let j = 0; j < strs.length; j++) {
      if (i === strs[j].length || strs[j].charAt(i) != c) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}

// TEST CASES
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["", "", ""]));
console.log(longestCommonPrefix(["apply", "apple", "ape", "aid"]));
console.log(longestCommonPrefix([]));
