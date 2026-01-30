/**
 * Recursion — fibonacci, isEven, power.
 */
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
function fibonacciIteration(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}
function isEven(n) {
  if (n === 0) return true;
  if (n === 1 || n === -1) return false;
  return isEven(n > 0 ? n - 2 : n + 2);
}
function power(base, exp) {
  if (exp === 0) return 1;
  if (exp < 0) return 1 / power(base, -exp);
  return base * power(base, exp - 1);
}

console.log("fibonacci(8):", fibonacci(8), fibonacciIteration(8));
console.log("isEven(4):", isEven(4), "isEven(5):", isEven(5));
console.log("power(2,3):", power(2, 3));
