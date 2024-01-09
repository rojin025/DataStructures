export class MaxBinaryHeap {
  values: number[];
  constructor() {
    this.values = [];
  }

  insert(element: number) {
    this.values.push(element);
    this.bubbleUp(element);
  }

  bubbleUp(element: number): number[] {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
    return this.values;
  }
}
