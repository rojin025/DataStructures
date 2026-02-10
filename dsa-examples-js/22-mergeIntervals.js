/**
 * Merge Intervals — merge overlapping intervals (objects with start, end).
 * Sort by start, then merge if current.start <= last.end.
 * O(n log n) time (sort), O(n) space.
 */

function mergeIntervals(intervals) {
  if (!intervals || intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a.start - b.start);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = merged[merged.length - 1];
    if (current.start <= last.end) {
      last.end = Math.max(last.end, current.end);
    } else {
      merged.push(current);
    }
  }
  return merged;
}

// Example: [{start:1,end:3}, {start:2,end:6}, {start:8,end:10}]
console.log(mergeIntervals([
  { start: 1, end: 3 },
  { start: 2, end: 6 },
  { start: 8, end: 10 },
])); // [{ start: 1, end: 6 }, { start: 8, end: 10 }]
console.log(mergeIntervals([{ start: 1, end: 4 }, { start: 4, end: 5 }])); // [{ start: 1, end: 5 }]

module.exports = { mergeIntervals };
