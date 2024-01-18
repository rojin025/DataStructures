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
