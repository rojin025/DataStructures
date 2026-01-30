class NodeQ {
  next: NodeQ | null;
  value: number;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  size: number;
  first: NodeQ | null;
  last: NodeQ | null;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value: number): number {
    let newLast = new NodeQ(value);
    if (!this.first) {
      this.first = newLast;
      this.last = newLast;
    } else {
      let oldLast = this.last;
      if (oldLast) oldLast.next = newLast;
      this.last = newLast;
    }
    return ++this.size;
  }

  dequeue(): null | number {
    if (!this.first) return null;
    let oldFirst = this.first;

    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = oldFirst.next;
    }
    this.size--;
    return oldFirst.value;
  }
}
