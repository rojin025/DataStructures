// Side

let count = 0;
export function recursion() {
  count++;
  if (count >= 3) return count;
  return recursion;
}

export function factorial(num: number): number {
  if (num <= 1) return 1;
  return num * factorial(--num);
}

export function fibonacci(num: number): number {
  if (num <= 1) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

export function fibonacciIteration(num: number): number {
  let arr = [0, 1];
  for (let i = 2; i < num + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[num];
}

export function isEven(num: number): boolean {
  if (num < 0) return false;
  else if (num === 0) return true;
  else if (num === 1) return false;
  else return isEven(num - 2);
}

export function power(x: number, k: number): number {
  if (k === 0) return 1;
  else if (k === 1) return x;
  else {
    return x * power(x, k - 1);
  }
}

/*

Function calculateSum(L : node):
    // Base case  node is null
    if node is None/ Null:
        return  0
    else:
        return sumHelper(L , 0)
        
        
Function sumHelper(L : node, sum: number):
      // Base case  node is null
      if node is None:
        return  0
      else
        return sumHelper(L.after() , sum + L.data)
*/

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
