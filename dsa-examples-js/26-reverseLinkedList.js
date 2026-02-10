/**
 * Reverse Linked List — iterative in-place; given head, return new head of reversed list.
 * Three pointers: prev, cur, next. O(n) time, O(1) space.
 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function reverseList(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
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

const head = arrayToList([1, 2, 3, 4, 5]);
console.log(listToArray(reverseList(head))); // [5, 4, 3, 2, 1]
