/**
 * Merge Two Sorted Lists — given two sorted linked list heads, return head of merged list.
 * Dummy node + two pointers. O(n + m) time, O(1) space (excluding output).
 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return dummy.next;
}

function listToArray(head) {
  const out = [];
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let cur = dummy;
  for (const v of arr) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dummy.next;
}

const l1 = arrayToList([1, 2, 4]);
const l2 = arrayToList([1, 3, 4]);
console.log(listToArray(mergeTwoLists(l1, l2))); // [1, 1, 2, 3, 4, 4]
