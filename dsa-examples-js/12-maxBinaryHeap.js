/**
 * Max Binary Heap — parent > children, insert, extractMax.
 */
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    let i = this.values.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.values[p] >= this.values[i]) break;
      [this.values[p], this.values[i]] = [this.values[i], this.values[p]];
      i = p;
    }
    return this.values;
  }
  extractMax() {
    if (!this.values.length) return undefined;
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      let i = 0;
      while (true) {
        const L = 2 * i + 1,
          R = 2 * i + 2;
        let largest = i;
        if (L < this.values.length && this.values[L] > this.values[largest])
          largest = L;
        if (R < this.values.length && this.values[R] > this.values[largest])
          largest = R;
        if (largest === i) break;
        [this.values[i], this.values[largest]] = [
          this.values[largest],
          this.values[i],
        ];
        i = largest;
      }
    }
    return max;
  }
}

const heap = new MaxBinaryHeap();
[10, 5, 13, 11, 2, 16, 7].forEach((v) => heap.insert(v));
console.log(heap.values);
console.log(heap.extractMax(), heap.values);
