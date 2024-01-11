// build in JS
let arr2 = ["z", "b", "a", "c"];
let arrNum = [3, 2, 1, 5, 4];
function numCompare(num1: number, num2: number): number {
  return num1 - num2;
}

// console.log(arrNum.sort(numCompare));
// console.log(arr2.sort());

/** BubbleSort */
function bubbleSort(arr: number[]): number[] {
  let swap = false;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log("Swaped!");
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}

console.log(bubbleSort(arrNum));
