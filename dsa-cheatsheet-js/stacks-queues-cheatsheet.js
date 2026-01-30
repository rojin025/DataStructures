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

// --- Queue (using array; shift is O(n). For O(1) use linked list or two stacks)
const queue = [];
queue.enqueue = (x) => queue.push(x);
queue.dequeue = () => queue.shift(); // O(n) with array
queue.peek = () => queue[0];
queue.isEmpty = () => queue.length === 0;

// Queue with linked list would be O(1) enqueue (tail) and O(1) dequeue (head).

module.exports = { stack, queue };
