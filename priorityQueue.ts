class NodeQ {
  priority: number;
  value: number;
  constructor(value: number, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

export class PriorityQueue {
  elements: NodeQ[];
  constructor() {
    this.elements = [];
  }

  enqueue(value: number, priority: number) {
    let newNode = new NodeQ(value, priority);
    this.elements.push(newNode);
    this.bubbleUp(newNode);
  }

  dequeue(): NodeQ | null {
    if (!this.elements.length) return null;
    const max = this.elements[0];
    let lastElement = this.elements.pop();
    if (lastElement) this.elements[0] = lastElement;
    this.bubbleDown();
    return max;
  }

  bubbleUp(element: NodeQ) {
    let idx = this.elements.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.elements[parentIdx];
      if (element.priority >= parent.priority) break;
      this.elements[parentIdx] = element;
      this.elements[idx] = parent;
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.elements.length;
    const element = this.elements[idx];
    let leftChild: NodeQ, rightChild: NodeQ;
    let swapIdx: null | number;

    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      swapIdx = null;

      if (leftIdx < length) {
        leftChild = this.elements[leftIdx];
        if (leftChild.priority < element.priority) {
          swapIdx = leftIdx;
        }
      } else {
        leftChild = {
          value: Infinity,
          priority: Infinity,
        };
      }
      if (rightIdx < length) {
        rightChild = this.elements[rightIdx];
        if (
          (swapIdx === null && rightChild.priority < element.priority) ||
          (swapIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIdx = rightIdx;
        }
      }
      if (swapIdx === null) break;
      this.elements[idx] = this.elements[swapIdx];
      this.elements[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

// Expected
// [
//     NodeQ { value: 11, priority: 2 },
//     NodeQ { value: 13, priority: 2 },
//     NodeQ { value: 10, priority: 3 },
//     NodeQ { value: 7, priority: 5 },
//     NodeQ { value: 5, priority: 5 },
//     NodeQ { value: 2, priority: 5 }
//   ]
