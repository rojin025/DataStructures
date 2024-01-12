// build in JS
let arr2 = ["z", "b", "a", "c"];
let arrNum = [3, 2, 1, 5, 4];
function numCompare(num1: number, num2: number): number {
  return num1 - num2;
}
// console.log(arrNum.sort(numCompare));
// console.log(arr2.sort());
function swapNum(arr: number[], lower: number, greater: number) {
  const temp = arr[lower];
  arr[lower] = arr[greater];
  arr[greater] = temp;
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
