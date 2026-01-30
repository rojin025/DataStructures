let arr = [1, 2, 3, 4, 5];

/** Linear Seach */
function linearSearch(arr: number[], target: number): number {
  if (arr.length < 0) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// console.log(linearSearch(arr, 1));
// console.log(linearSearch(arr, 3));
// console.log(linearSearch(arr, 5));
// console.log(linearSearch(arr, 50));
// console.log(linearSearch([], 50));

/** Binary Seach */
function binarySearch(arr: number[], target: number): number {
  if (!arr.length) return -1;
  let right = arr.length - 1;
  let left = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 50));
console.log(binarySearch([], 50));
