/**
 * SORTING — DSA Cheatsheet (JS)
 * -----------------------------
 * Comparison sorts (compare two elements): lower bound Ω(n log n). Below: O(n²) basics + O(n log n) divide-and-conquer.
 * Non-comparison (Counting, Radix, Bucket) can reach O(n) for restricted inputs.
 *
 * Learning order: Bubble → Selection → Insertion (simple). Then Merge (stable, extra space), Quick (in-place, pivot).
 * V8's Array.sort: hybrid of Quick Sort + Insertion Sort for small subarrays.
 *
 * Same test array used in all for easy comparison.
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// --- Bubble Sort: compare adjacent, swap if wrong order. O(n^2). ---
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// --- Selection Sort: find min in unsorted, swap to front. O(n^2). ---
function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    const temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) min = j;
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

// --- Insertion Sort: insert each element into sorted portion. O(n^2); best O(n) when nearly sorted. ---
function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      if (array[i] < array[i - 1]) {
        for (let j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}

// --- Merge Sort: divide-and-conquer, merge sorted halves. O(n log n), stable, space O(n). ---
function mergeSort(array) {
  if (array.length === 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// --- Quick Sort: pivot, partition, recurse. O(n log n) avg, O(n^2) worst. In-place. ---
function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;
  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  const pivotValue = array[pivot];
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// Usage (don't mutate original if you need it):
// quickSort([...numbers], 0, numbers.length - 1);
// const answer = mergeSort([...numbers]);

module.exports = {
  numbers,
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  merge,
  quickSort,
  partition,
  swap,
};
