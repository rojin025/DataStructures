/**
 * LINKED LISTS — DSA Cheatsheet (JS)
 * ----------------------------------
 * Nodes in a chain: each node holds value + reference to next (singly) or next + prev (doubly).
 * No contiguous memory: nodes can live anywhere; no random access by index.
 *
 * Big O: prepend/append O(1), lookup/insert/delete at position O(n).
 *
 * Singly: one pointer per node; traverse forward only. Doubly: two pointers; traverse both ways (more memory).
 *
 * Use when: Frequent insert/delete at head or tail, unknown size, or when you need stable references
 * (e.g. other nodes pointing to this one). Good for queues (with tail pointer), undo history.
 * Avoid when: You need index access or frequent middle lookups (use array or tree).
 */

// --- Singly linked list node ---
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// --- reverse() in place: flip next pointers, return new head ---
function reverse(head) {
  if (!head || !head.next) return head;

  let prev = null;
  let next = null;
  let current = head;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev; // new head
}

// --- Doubly linked list node ---
class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Example: build list 1 -> 2 -> 3 and reverse
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
const newHead = reverse(one); // 3 -> 2 -> 1

module.exports = { Node, DoublyNode, reverse };
