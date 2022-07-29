function removeDuplicates(head) {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

// TESTCASES
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([]));
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 5, 6, 6]));
console.log(removeDuplicates([1, 1]));
