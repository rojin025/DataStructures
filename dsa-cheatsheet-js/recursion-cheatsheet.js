/**
 * RECURSION — DSA Cheatsheet (JS)
 * -------------------------------
 * Function calls itself. Base case stops the recursion; recursive case reduces the problem.
 * Without a base case you get stack overflow ("Maximum call stack size exceeded").
 *
 * When to use: Problem breaks into smaller instances of the same problem (trees, divide-and-conquer, backtracking).
 * Trade-off: Clear and concise vs extra stack space; for linear recursion consider iteration.
 *
 * Classic examples: factorial (n! = n * (n-1)!), Fibonacci (F(n) = F(n-1) + F(n-2)). Below: iterative and recursive versions.
 */

// --- Example: Factorial (iterative) O(n) ---
function findFactorialIterative(num) {
  let res = num;
  for (let i = num; i > 0; i--) {
    if (i !== 1) res = res * (i - 1);
  }
  return res;
}

// --- Factorial recursive O(n): base case 2! = 2, then n * (n-1)! ---
function findFactorialRecursive(num) {
  if (num === 2) return 2;
  return num * findFactorialRecursive(num - 1);
}

// --- Factorial recursive (memoized): cache avoids recomputation across calls ---
const factorialCache = {};
function findFactorialMemoized(num) {
  if (num in factorialCache) return factorialCache[num];
  if (num === 2) return 2;
  factorialCache[num] = num * findFactorialMemoized(num - 1);
  return factorialCache[num];
}
// findFactorialIterative(5) => 120

// --- Example: Fibonacci (iterative) O(n) ---
// N is index; sequence 0, 1, 1, 2, 3, 5, 8, ... so index 5 => value 5.
function fibonacciIterative(n) {
  const arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

// --- Example: Fibonacci (recursive) O(2^n) - slow, no memoization ---
function fibonacciRecursive(n) {
  if (n < 2) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
// fibonacciRecursive(3) => 2

module.exports = {
  findFactorialIterative,
  findFactorialRecursive,
  findFactorialMemoized,
  fibonacciIterative,
  fibonacciRecursive,
};
