/**
 * STACKS & QUEUES — DSA Cheatsheet (JS)
 * -------------------------------------
 * Linear, restricted access: you only touch one end (stack) or both ends (queue). No random access.
 *
 * STACK (LIFO): push, pop, peek — all O(1). Use for: call stack, undo, backtracking, paren matching.
 *
 * QUEUE (FIFO): enqueue (back), dequeue (front), peek, isEmpty — O(1) with linked list;
 * with array, dequeue (shift) is O(n). Use for: BFS, task queue, buffering.
 *
 * Learning tip: Same underlying store (array or list); the interface enforces the rule
 * (only top vs only front/back) so you get predictable, efficient behavior.
 */

// --- Stack (using array; push/pop at end) ---
const stack = [];
stack.push(1); // push O(1)
stack.push(2);
stack.peek = () => stack[stack.length - 1]; // peek O(1)
stack.pop(); // pop O(1)

// --- Queue (using array; shift is O(n). For O(1) use linked list or two stacks) ---
const queue = [];
queue.enqueue = (x) => queue.push(x);
queue.dequeue = () => queue.shift(); // O(n) with array
queue.peek = () => queue[0];
queue.isEmpty = () => queue.length === 0;

// Queue with linked list would be O(1) enqueue (tail) and O(1) dequeue (head).

// ========== Class-based + minimal arrays (below) ==========

// --- Stack class (push/pop at end ✅ all O(1)) ---
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

// --- Queue class (array: dequeue via shift ❌ O(n); for O(1) use linked list or two stacks) ---
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
  isEmpty() {
    return this.items.length === 0;
  }
  get size() {
    return this.items.length;
  }
}

// --- Minimal: stack with raw array (push/pop at end ✅ O(1)) ---
const stackArr = [];
stackArr.push(1);
stackArr.push(2);
stackArr.pop(); // 2

// --- Minimal: queue with raw array (enqueue ✅ O(1), dequeue shift ❌ O(n)) ---
const queueArr = [];
queueArr.push(1);
queueArr.push(2);
queueArr.shift(); // 1

module.exports = { stack, queue, Stack, Queue, stackArr, queueArr };
