/**
 * Exam helpers — isEvenMutual (mutual recursion), sum, sumFirst.
 */
function isEvenMutual(n) {
  if (n === 0) return true;
  return isOddMutual(n - 1);
}
function isOddMutual(n) {
  if (n === 0) return false;
  return isEvenMutual(n - 1);
}
function sum(n) {
  function go(acc, k) {
    if (k === 0) return acc;
    return go(acc + k, k - 1);
  }
  return go(0, n);
}
function sumFirst(n) {
  if (n <= 0) return 0;
  return n + sumFirst(n - 1);
}

console.log("isEvenMutual(4):", isEvenMutual(4), "isEvenMutual(5):", isEvenMutual(5));
console.log("sum(3):", sum(3));
console.log("sumFirst(4):", sumFirst(4));
