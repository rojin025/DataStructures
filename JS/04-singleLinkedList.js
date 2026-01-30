/**
 * Single Linked List — push, pop, get, reverse.
 */
class Node {
  constructor(val) { this.val = val; this.next = null; }
}
class SingleLinkedList {
  constructor() { this.head = null; this.length = 0; }
  push(val) {
    const n = new Node(val);
    if (!this.head) this.head = n;
    else { let cur = this.head; while (cur.next) cur = cur.next; cur.next = n; }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) { const v = this.head.val; this.head = null; this.length = 0; return v; }
    let cur = this.head;
    while (cur.next.next) cur = cur.next;
    const v = cur.next.val; cur.next = null; this.length--;
    return v;
  }
  get(i) {
    if (i < 0 || i >= this.length) return null;
    let cur = this.head;
    while (i--) cur = cur.next;
    return cur.val;
  }
  reverse() {
    let prev = null, cur = this.head;
    while (cur) { const next = cur.next; cur.next = prev; prev = cur; cur = next; }
    this.head = prev;
    return this;
  }
}

const list = new SingleLinkedList();
list.push(1).push(2).push(3);
console.log(list.get(1), list.pop());
list.reverse();
console.log(list.get(0), list.get(1));
