export class NodeDLL {
  //   value: number;
  next: NodeDLL | null;
  prev: NodeDLL | null;
  constructor(public value: number) {
    this.next = null;
    this.prev = null;
  }
}

export class DoubleLinkedList {
  head: NodeDLL | null;
  tail: NodeDLL | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: number): DoubleLinkedList {
    const newNode = new NodeDLL(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }

    this.length++;
    return this;
  }

  pop() {}
}
