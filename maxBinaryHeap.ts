export class MaxBinaryHeap {
  values: number[];
  constructor() {
    this.values = [];
  }

  insert(element: number) {
    this.values.push(element);
    this.bubbleUp(element);
  }

  bubbleUp(element: number) {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax(): number | null {
    const max = this.values[0];
    let lastElement = this.values.pop();
    if (this.values.length > 0) {
      if (lastElement) this.values[0] = lastElement;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[index];
    let leftChild: number, rightChild: number;
    let swapIdx: null | number;

    while (true) {
      const leftIdx = 2 * index + 1;
      const rightIdx = 2 * index + 2;
      swapIdx = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild > element) {
          swapIdx = leftIdx;
        }
      } else leftChild = 0;
      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (swapIdx === null && rightChild > element) ||
          (swapIdx !== null && rightChild > leftChild)
        ) {
          swapIdx = rightIdx;
        }
      }
      if (swapIdx === null) break;
      this.values[index] = this.values[swapIdx];
      this.values[swapIdx] = element;
      index = swapIdx;
    }
  }
}
