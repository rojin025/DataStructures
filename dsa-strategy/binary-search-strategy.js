/**
 * BINARY SEARCH STRATEGY — When & how to use (JS)
 * ------------------------------------------------
 * When to use: Sorted array search, search in rotated array, "find minimum x such that …" (capacity, threshold).
 * Idea: Halve the search space each step. Can binary search on index (array) or on the answer value. O(log n).
 *
 * See: ../dsa-cheatsheet-js/searching-cheatsheet.js
 */

// --- 1. Classic binary search: sorted array, return index or -1 ---
// ✅ left <= right; mid = floor((L+R)/2); shrink left/right by mid±1
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

// --- 2. Lower bound: first index where arr[i] >= target (or arr.length) ---
// ✅ Use when: "first position of target", "insert position to keep sorted"
function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}

// --- 3. Upper bound: first index where arr[i] > target (or arr.length) ---
// ✅ Count of target in sorted array = upperBound(arr, target) - lowerBound(arr, target)
function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left;
}

// --- 4. Search in rotated sorted array (no duplicates) — return index or -1 ---
// ✅ One half is always sorted; check which half contains target
function searchRotated(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}

// --- 5. Binary search on answer: min capacity so we can ship in D days ---
// ✅ Condition: canShip(capacity) → binary search on capacity in [max(piles), sum(piles)]
function minCapacityToShipInDays(weights, days) {
  let lo = Math.max(...weights);
  let hi = weights.reduce((a, b) => a + b, 0);

  function canShip(cap) {
    let d = 1;
    let cur = 0;
    for (const w of weights) {
      if (cur + w > cap) {
        d++;
        cur = w;
      } else cur += w;
    }
    return d <= days;
  }

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (canShip(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}

// --- Run examples ---
console.log("--- Binary Search strategy (practice) ---\n");

const sorted = [1, 2, 4, 4, 4, 6, 8, 10];
console.log("1. binarySearch([1,2,4,4,4,6,8,10], 4):", binarySearch(sorted, 4));
console.log("   binarySearch([1,2,4,6,8,10], 5):", binarySearch([1, 2, 4, 6, 8, 10], 5));

console.log("2. lowerBound([1,2,4,4,4,6,8], 4):", lowerBound(sorted, 4));
console.log("   lowerBound([1,2,4,4,4,6,8], 5):", lowerBound(sorted, 5));

console.log("3. upperBound([1,2,4,4,4,6,8], 4):", upperBound(sorted, 4));
console.log("   count of 4:", upperBound(sorted, 4) - lowerBound(sorted, 4));

const rotated = [4, 5, 6, 7, 0, 1, 2];
console.log("4. searchRotated([4,5,6,7,0,1,2], 0):", searchRotated(rotated, 0));
console.log("   searchRotated([4,5,6,7,0,1,2], 3):", searchRotated(rotated, 3));

console.log("5. minCapacityToShipInDays([1,2,3,4,5,6,7,8,9,10], 5):", minCapacityToShipInDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

module.exports = {
  binarySearch,
  lowerBound,
  upperBound,
  searchRotated,
  minCapacityToShipInDays,
};
