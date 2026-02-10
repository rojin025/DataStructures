/**
 * Kth Largest Element — find the k-th largest element in an array (1-based).
 * Sort descending and take index k-1. O(n log n) time, O(1) extra space (in-place sort).
 * Alternative: min-heap of size k or quickselect for O(n) average.
 */

function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
