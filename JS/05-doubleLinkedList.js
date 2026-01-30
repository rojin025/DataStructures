/**
 * Double Linked List — push, pop, shift, unshift, get.
 */
class NodeDLL {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const n = new NodeDLL(val);
    if (!this.head) this.head = this.tail = n;
    else {
      this.tail.next = n;
      n.prev = this.tail;
      this.tail = n;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const v = this.tail.val;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return v;
  }
  shift() {
    if (!this.head) return undefined;
    const v = this.head.val;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return v;
  }
  unshift(val) {
    const n = new NodeDLL(val);
    if (!this.head) this.head = this.tail = n;
    else {
      n.next = this.head;
      this.head.prev = n;
      this.head = n;
    }
    this.length++;
    return this;
  }
  get(i) {
    if (i < 0 || i >= this.length) return null;
    let cur = i < this.length / 2 ? this.head : this.tail;
    if (i < this.length / 2) while (i--) cur = cur.next;
    else while (++i < this.length) cur = cur.prev;
    return cur.val;
  }
}

const list = new DoubleLinkedList();
list.push(10).push(20).push(30);
console.log(list.get(1), list.pop(), list.shift());
list.unshift(5);
console.log(list.get(0), list.length);
