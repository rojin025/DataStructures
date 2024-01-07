class NodeStack {
  next: NodeStack | null;
  constructor(public value: number) {
    this.next = null;
  }
}

export class Stack {
  first: NodeStack | null;
  last: NodeStack | null;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value: number): number {
    let newNode = new NodeStack(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let tempNode = this.first;
      this.first = newNode;
      newNode.next = tempNode;
    }
    return ++this.size;
  }

  pop(): number | null {
    if (!this.first) return null;
    let oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = oldFirst.next;
    this.size--;
    return oldFirst.value;
  }
}
