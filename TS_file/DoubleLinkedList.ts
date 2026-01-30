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

  pop(): NodeDLL | null {
    if (!this.head) return null;
    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else if (oldTail) {
      this.tail = oldTail.prev;
      if (this.tail) this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  shift(): NodeDLL | null {
    if (this.length === 0) return null;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (oldHead) {
        this.head = oldHead.next;
        if (this.head?.prev) this.head.prev = null;
        oldHead.next = null;
      }
    }

    this.length--;
    return oldHead;
  }

  unshift(value: number): DoubleLinkedList {
    const newHead = new NodeDLL(value);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      if (this.head) {
        this.head.prev = newHead;
        newHead.next = this.head;
        this.head = newHead;
      }
    }

    this.length++;
    return this;
  }

  get(index: number): NodeDLL | null {
    if (index < 0 || index >= this.length) return null;
    if (index < this.length / 2) {
      let leftCounter = 0;
      let currentNode = this.head;
      while (leftCounter < index) {
        if (currentNode?.next) currentNode = currentNode.next;
        leftCounter++;
      }
      return currentNode;
    } else {
      let rightCounter = this.length - 1;
      let currentNode = this.tail;
      while (rightCounter > index) {
        if (currentNode?.prev) currentNode = currentNode.prev;
        rightCounter--;
      }
      return currentNode;
    }
  }

  set(index: number, value: number): boolean {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: number): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new NodeDLL(value);
    let leftNode = this.get(index - 1);

    if (leftNode?.next) {
      let rightNode = leftNode.next;
      // Right Connections
      leftNode.next = newNode;
      newNode.next = rightNode;
      // Left Connections
      rightNode.prev = newNode;
      newNode.prev = leftNode;

      this.length++;
      return true;
    } else return false;
  }

  remove(index: number): boolean | NodeDLL | null {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let leftNode = this.get(index - 1);
    if (leftNode?.next) {
      let removedNode = leftNode.next;
      let rightNode = removedNode.next;

      // New Connection
      leftNode.next = rightNode;
      if (rightNode?.prev) rightNode.prev = leftNode;
      // removed Connection
      removedNode.next = null;
      removedNode.prev = null;

      this.length--;
      return removedNode;
    } else return false;
  }
}
