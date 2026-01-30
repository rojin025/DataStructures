/**
 * SEARCHING — DSA Cheatsheet (JS)
 * -------------------------------
 * Linear search: scan one by one. O(n). Use for unsorted or small data.
 * Binary search: halve the range each step. O(log n). Requires sorted data; use when n is large.
 *
 * In graphs/trees: BFS (queue) for shortest path or level-by-level; DFS (stack/recursion) for path exists or full explore.
 * Below: linear and binary on arrays only.
 */

// --- Linear Search: sequential, return index or -1 ---
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// --- Binary Search: sorted array; return index or -1 ---
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Example: sorted array
const sorted = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
binarySearch(sorted, 44); // 6
linearSearch(sorted, 44); // 6

module.exports = { linearSearch, binarySearch, sorted };
