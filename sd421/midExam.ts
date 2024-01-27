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

export function powerLog(x: number, n: number): number {
  if (n === 0) {
    return 1;
  } else {
    const partial = powerLog(x, Math.floor(n / 2));
    let result = partial * partial;

    if (n % 2 === 1) {
      result *= x;
    }

    return result;
  }
}

// Pseudo code of isBalance
/*
  function isBalanced ( str: string): boolean{
    Create an empty stack of characters
    balanced = true;
    opening = ['(', '[', '{'];
    closing = [')', ']', '}'];
    pairs = {'(': ')', '[': ']', '{': '}'}

    index = 0;
    currentChar : string;
    
    While (balanced && index < str.length) {
      currentChar = str[index];
      if (currentChar in opening) stack.push(currentChar)
      else if (currentChar in closing && (stack.isEmpty() || pairs[stack.pop()] != currentChar )) balanced = false
      index++;
    }
    if (balanced && stack.isEmpty()) return true;
    return false.
  }
*/

function isBalanced(str: string): boolean {
  const stack: string[] = [];
  let balanced: boolean = true;
  const opening: string[] = ["(", "[", "{"];
  const closing: string[] = [")", "]", "}"];
  const pairs: { [key: string]: string } = { "(": ")", "[": "]", "{": "}" };

  let index: number = 0;
  let currentChar: string;

  while (balanced && index < str.length) {
    currentChar = str[index];
    if (opening.includes(currentChar)) {
      stack.push(currentChar);
    } else if (
      closing.includes(currentChar) &&
      // (stack.length === 0 || pairs[stack.pop()] !== currentChar)
    ) {
      balanced = false;
    }
    index++;
  }

  return balanced && stack.length === 0;
}

// Example usage:
const result1 = isBalanced("((a + b) * (c - d))"); // true
const result2 = isBalanced("{[a + b] * (c - d)}"); // true
const result3 = isBalanced("{[a + b) * (c - d]}"); // false

// Bst
// Algorithm preOrder(node) 
// 	if ((node == null)) return;
// 	print(node.element()); 
// 	preOrder(node.leftChild()); 
// 	preOrder(node.rightChild());
