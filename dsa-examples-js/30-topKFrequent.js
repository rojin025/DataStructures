/**
 * Top K Frequent Elements — return the k most frequent elements (order doesn't matter).
 * Hash count, then sort by count and take top k. O(n log n) time, O(n) space.
 * Alternative: bucket sort by frequency for O(n), or heap of size k.
 */

function topKFrequent(nums, k) {
  const count = new Map();
  for (const n of nums) count.set(n, (count.get(n) || 0) + 1);
  const sorted = [...count.entries()].sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map(([n]) => n);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));       // [1, 2]
console.log(topKFrequent([1, 1, 2, 2, 2, 3], 2));       // [2, 1] or [1, 2]
