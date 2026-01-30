/**
 * Stack — LIFO, push/pop (array or list).
 */
class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    this.items.push(val);
    return this.items.length;
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  get size() {
    return this.items.length;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.pop(), s.pop(), s.peek(), s.size);
