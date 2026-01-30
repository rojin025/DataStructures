/**
 * Queue — FIFO, enqueue (push) / dequeue (shift).
 */
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(val) {
    this.items.push(val);
    return this.items.length;
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  get size() {
    return this.items.length;
  }
}

const q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
console.log(q.dequeue(), q.dequeue(), q.peek(), q.size);
