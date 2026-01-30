/**
 * DYNAMIC PROGRAMMING — DSA Cheatsheet (JS)
 * -----------------------------------------
 * Solve by subproblems; cache results so you don't recompute (memoization). Often recursive + cache, or iterative + table.
 *
 * When to use: Overlapping subproblems (same input used many times), optimal substructure (best solution uses best sub-solutions).
 * Steps: 1) Define subproblem 2) Recurrence 3) Base case 4) Memoize or build table.
 *
 * Caching = store data for fast reuse (e.g. API responses). Memoization = cache return values of a function by its arguments.
 * Example: naive Fibonacci recalculates F(n) many times; memoized version stores F(k) once per k.
 */
// Without memoization: recomputes every time
function addTo80(n) {
  console.log("long time");
  return n + 80;
}

// Memoized: return cached result for same input
function memoizedAddTo80() {
  const cache = {};
  return function (n) {
    if (n in cache) return cache[n];
    console.log("long time");
    cache[n] = n + 80;
    return cache[n];
  };
}

const memoized = memoizedAddTo80();
// console.log(memoized(5)); // logs "long time", returns 85
// console.log(memoized(5)); // no log, returns 85 (from cache)

/**
 * Fibonacci with memoization: avoid O(2^n) repeated calls by caching F(k) per k.
 */
function fibMemo() {
  const cache = {};
  return function fib(n) {
    if (n in cache) return cache[n];
    if (n < 2) return n;
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fib = fibMemo();
// fib(40) is fast vs naive recursive fib(40)

module.exports = { addTo80, memoizedAddTo80, fibMemo };
