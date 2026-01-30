/**
 * Priority Queue — min-heap by priority, enqueue(val, priority), dequeue().
 */
class PQNode {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    const n = new PQNode(val, priority);
    this.values.push(n);
    let i = this.values.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.values[p].priority <= this.values[i].priority) break;
      [this.values[p], this.values[i]] = [this.values[i], this.values[p]];
      i = p;
    }
    return this.values.length;
  }
  dequeue() {
    if (!this.values.length) return undefined;
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      let i = 0;
      while (true) {
        const L = 2 * i + 1,
          R = 2 * i + 2;
        let smallest = i;
        if (
          L < this.values.length &&
          this.values[L].priority < this.values[smallest].priority
        )
          smallest = L;
        if (
          R < this.values.length &&
          this.values[R].priority < this.values[smallest].priority
        )
          smallest = R;
        if (smallest === i) break;
        [this.values[i], this.values[smallest]] = [
          this.values[smallest],
          this.values[i],
        ];
        i = smallest;
      }
    }
    return min.val;
  }
}

const pq = new PriorityQueue();
pq.enqueue("cold", 5);
pq.enqueue("gunshot", 1);
pq.enqueue("fever", 4);
console.log(pq.dequeue(), pq.dequeue(), pq.dequeue());
