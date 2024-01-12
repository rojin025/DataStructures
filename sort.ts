// build in JS
let arr2 = ["z", "b", "a", "c"];
let arrNum = [3, 2, 1, 5, 4];
function numCompare(num1: number, num2: number): number {
  return num1 - num2;
}
// console.log(arrNum.sort(numCompare));
// console.log(arr2.sort());
function swapNum(arr: number[], left: number, right: number) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
/** BubbleSort */
function bubbleSort(arr: number[]): number[] {
  let swap = false;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swapNum(arr, j, j + 1);
        console.log("Swaped!");
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}
// console.log(bubbleSort(arrNum));

/** Selection Sort */
function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let needSwap = false;
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr);
      console.log(arr[lowest], arr[j]);
      if (arr[j] < arr[lowest]) {
        console.log("Index Swaped");
        lowest = j;
        needSwap = true;
      }
    }
    if (needSwap) {
      swapNum(arr, lowest, i);
      console.log("!");
      console.log(arr);
    }
  }
  return arr;
}

// console.log(selectionSort(arrNum));

// [3, 2, 1, 5, 4];
// Not working ?
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let next = 1;
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log("Inside J");
      next = j + 1;
      arr[next] = arr[j];
    }
    console.log("after Loop", arr);
    console.log("next", next);
    console.log("currentVal", currentVal);
    arr[i - 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

// console.log(insertionSort(arrNum));

/** Merge Sort */
function merge(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    console.log(".");
    console.log((arr1[i], arr2[j]));
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
// console.log(merge([1, 3, 4], [2, 5, 6, 7]));
// [3,2,1,4]
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
// console.log(mergeSort([3, 2, 1, 4]));

/** Quick Sort */
function findPivotIndex(
  arr: number[],
  start: number = 0,
  end: number = arr.length
): number {
  let pivotIdx = start,
    pivot = arr[start];

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      swapNum(arr, pivotIdx, i);
    }
  }
  swapNum(arr, start, pivotIdx);
  return pivotIdx;
}
// console.log(findPivotIndex([2, 1, 3]));

function quickSort(
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
) {
  if (left < right) {
    let pivotIdx = findPivotIndex(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

// console.log("Array", quickSort([2, 1, 3]));
// console.log("Array", quickSort([10, 2, 1, 3, 11, -1]));

/** Radix Sort */
function getDigitAt(num: number, at: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, at)) % 10;
}

// console.log(getDigitAt(1234, 0));
// console.log(getDigitAt(1234, 1));
// console.log(getDigitAt(1234, 2));
// console.log(getDigitAt(1234, 3));

function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(123));
// console.log(digitCount(12));
// console.log(digitCount(1));
// console.log(digitCount(0));

function findMaxDigits(arr: number[]): number {
  return digitCount(Math.max(...arr));
}

// console.log(findMaxDigits([1, 22, 333, 4444]));

function radixSort(arr: number[]): number[] {
  const maxDigit = findMaxDigits(arr);
  for (let at = 0; at < maxDigit; at++) {
    let bucketDigit = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digitKey = getDigitAt(arr[i], at);

      /**
       * arr[i] 
        Argument of type 'number' is not assignable to parameter of type 'never'.
      */
      // if (arr[i]) {
      //   bucketDigit[digitKey].push(arr[i]);
      // }
    }
    arr = [].concat(...bucketDigit);
  }
  return arr;
}
