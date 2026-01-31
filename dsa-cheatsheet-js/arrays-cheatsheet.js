/**
 * ARRAYS — DSA Cheatsheet (JS)
 * ---------------------------
 * Contiguous storage: items sit next to each other in memory, so index = direct offset.
 *
 * Time Complexity:
 *   Access    O(1)  — by index
 *   Search    O(n)  — must scan
 *   Insertion O(n)  — shift elements (except push at end = O(1))
 *   Deletion  O(n)  — shift elements (except pop at end = O(1))
 *   Space     O(n)
 *
 * Types: Static (fixed size) vs Dynamic (grow/shrink; JS arrays are dynamic).
 *
 * Use when: You need order + fast index access or fast push/pop at the end.
 * Avoid when: You do lots of insert/delete in the middle, or need key-based lookup (use Map).
 */

// Static-like: fixed length (JS doesn't enforce; this is conceptual)
const staticExample = [1, 2, 3];

// Dynamic: push/pop are O(1) at end
const dynamic = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
dynamic.push(100); // O(1) - add at end → 12 (new length)
dynamic.pop(); // O(1) - remove from end → 100 (removed element)
dynamic.unshift(0); // O(n) - shift all elements → 12 (new length)
// splice(start, deleteCount, ...items): start=index, deleteCount=how many to remove, items=to insert. Mutates; returns removed[]
dynamic.splice(2, 0, 999); // O(n) — insert 999 at index 2, remove 0 → []; dynamic now has 999 at pos 2
// e.g. splice(2, 1) removes 1 at 2; splice(2, 1, 999) replaces 1 at 2 with 999

// Access by index - O(1)
const first = dynamic[0];

// Search - O(n) (must loop)
// Returns the index of 44 in dynamic (example: 1 if 44 is present at 1st index)
const index = dynamic.indexOf(44); // index = 1

// --- Method quick reference (mutating vs non-mutating) ---
// Mutating: push, pop, shift, unshift, splice, sort, reverse, fill
// Non-mutating (return new/derived): slice, concat, map, filter, reduce, flat, indexOf, includes

// Before operation: dynamic = [0, 99, 999, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
dynamic.slice(1, 4); // O(k) — copy subarray, no mutation → [99, 999, 44]
// concat(...values): non-mutating; returns new array. Values can be arrays (flattened one level) or primitives (added as-is)
dynamic.concat([5, 6]); // O(n + m) — new array → [0, 99, 999, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 5, 6]
[...dynamic, 7]; // O(n) — spread copy + add → [0, 99, 999, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 7]
dynamic.includes(44); // O(n) — boolean search → true
dynamic.reverse(); // O(n) — in-place (mutates!) → [0, 4, 283, 87, 63, 5, 1, 2, 6, 44, 999, 99, 0]

// Why O(n log n)?
// Array.prototype.sort in JS (with a comparator) typically uses an optimized quicksort, mergesort, or timsort under the hood.
// Sorting can't be done faster than O(n log n) for comparison sorts; "log n" levels (splits or merges), "n" comparisons per level.
// See: https://en.wikipedia.org/wiki/Sorting_algorithm#Comparison_of_algorithms
dynamic.sort((a, b) => a - b); // O(n log n) — in-place; use comparator for numbers → [0, 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283, 999]

// --- Creating / filling arrays ---
// Array.from(arrayLike, mapFn?, thisArg?): arrayLike = iterable or { length }; mapFn(element, index) → value
Array.from({ length: 5 }, (_, i) => i); // [0,1,2,3,4]
Array(5).fill(0); // [0,0,0,0,0] — same reference for objects!

// Array(3) → sparse [empty×3]; .fill(null) so .map runs (map skips holes); map → 3 rows of Array(3).fill(0)
const grid = Array(3)
  .fill(null)
  .map(() => Array(3).fill(0)); // 3x3 matrix → [[0,0,0],[0,0,0],[0,0,0]]

// --- Copy gotcha: shallow vs “copy” ---
const orig = [{ x: 1 }];
const shallow = [...orig]; // shallow: shallow[0] === orig[0]
shallow[0].x = 99; // mutates orig[0] too!
const deep = JSON.parse(JSON.stringify(orig)); // deep copy (no functions/dates)

// --- Classic DSA patterns (reference) ---
// Two pointers (e.g. two-sum, palindrome): left=0, right=len-1 or both from start
// Sliding window: expand right, shrink left when constraint broken; track window state
// Prefix sum: pre[i] = pre[i-1] + arr[i]; range sum [i,j] = pre[j] - pre[i-1]
// In-place swap: [a[i], a[j]] = [a[j], a[i]];

// Reverse in place (often needed)
function reverseInPlace(arr) {
  let l = 0,
    r = arr.length - 1;
  while (l < r) ([arr[l], arr[r]] = [arr[r], arr[l]]), l++, r--;
}

module.exports = { staticExample, dynamic, reverseInPlace };
