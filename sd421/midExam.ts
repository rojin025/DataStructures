// Exam prep notes

// Recursion
// Side

let count = 0;
export function recursion() {
  count++;
  if (count >= 3) return count;
  return recursion;
}

// Linear
export function factorial(num: number): number {
  if (num <= 1) return 1;
  return num * factorial(--num);
}

export function isEven(num: number): boolean {
  if (num === 0) return false;
  else if (num === 1) return false;
  else return isEven(num - 2);
}

// Tail Recursion
export function sumFirst(num: number) {
  return sumFirstHelper(num, 0);
}

function sumFirstHelper(num: number, sum: number) {
  if (num === 0) return sum;
  return sumFirstHelper(num - 1, num + sum);
}

// Multi
export function fibonacci(num: number): number {
  if (num < 0) return 0;
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// Mutual Recursion
export function isEvenMutual(num: number): boolean {
  if (num === 0) return true;
  return isOdd(--num);
}

export function isOdd(num: number): boolean {
  if (num === 0) return false;
  return isEvenMutual(--num);
}

export function power(x: number, k: number): number {
  if (k === 0) return 1;
  else if (k === 1) return x;
  else {
    return x * power(x, k - 1);
  }
}

export function sum(n: number): number {
  return sumHelper(1, n);
}

function sumHelper(start: number, end: number): number {
  if (start > end) {
    return 0;
  } else {
    const mid = Math.floor((start + end) / 2);
    const leftSum = sumHelper(start, mid - 1);
    const rightSum = sumHelper(mid + 1, end);
    console.log("L: ", leftSum);
    console.log("R: ", rightSum);
    return leftSum + rightSum + mid;
  }
}

// FindMax

/*
function findMax(array):
    // Base case: if array is empty, return null 
    if array is empty:
        return null;

    // Get the first number of array
    firstElement = array[0];

    retun maxHelper(arrat, 1 , firstElement);

function maxHelper(array, index, currentMax)    
  if index = array.length
    return currentMax
  else
    currentMax = Math.max(currentMax, array[index]);
    index++;
    return maxHelper(array, index, macurrentM)  
    */

/*
Time complexity is O(logn)
function sum(n):
    // Base case: if n is 0, return 0
    if n == 0:
        return 0
    else if n == 1:
        return 1
    else:
        // Split the problem into two halves and make two recursive calls
        mid = Math.floor(n / 2)
        sumLeft = sum(mid)
        sumRight = sum(n - mid)
        
        // Combine the results of the two halves
        return sumLeft + sumRight

    */
