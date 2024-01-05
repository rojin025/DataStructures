class ListNode {
  next: ListNode | null;
  constructor(public value: number) {
    this.next = null;
  }
}

export class SingleLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: number) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    return oldHead;
  }

  unshift(value: number) {
    const newHead = new ListNode(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (currentNode?.next) {
        currentNode = currentNode?.next;
      }
    }
    return currentNode;
  }

  set(index: number, value: number) {
    let targetNode = this.get(index);
    if (!targetNode) {
      return false;
    }
    if (targetNode?.value) {
      targetNode.value = value;
    }
    return true;
  }

  insert(index: number, value: number) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    index--;
    const targetNode = this.get(index);
    const newNode = new ListNode(value);
    if (targetNode?.next) {
      let temp = targetNode.next;
      newNode.next = targetNode?.next;
      targetNode.next = temp;
    }
    this.length++;
    return true;
  }
}
