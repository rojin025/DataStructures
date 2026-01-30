/**
 * Recursion — countdown, factorial, collect odds/evens.
 */
function countDown(n) {
  if (n <= 0) return;
  console.log(n);
  countDown(n - 1);
}
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
function collectOdd(arr) {
  if (arr.length === 0) return [];
  return (arr[0] % 2 ? [arr[0]] : []).concat(collectOdd(arr.slice(1)));
}

console.log("countDown(3):"); countDown(3);
console.log("factorial(5):", factorial(5));
console.log("collectOdd([1,2,3,4,5]):", collectOdd([1, 2, 3, 4, 5]));
