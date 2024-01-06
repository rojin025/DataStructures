class NodeDLL {
  //   value: number;
  next: NodeDLL | null;
  prev: NodeDLL | null;
  constructor(public value: number) {
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  head: NodeDLL | null;
  tail: NodeDLL | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
