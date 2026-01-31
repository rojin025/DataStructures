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
dynamic.push(100); // O(1) - add at end
dynamic.pop(); // O(1) - remove from end
dynamic.unshift(0); // O(n) - shift all elements
dynamic.splice(2, 0, 999); // O(n) - insert at index

// Access by index - O(1)
const first = dynamic[0];

// Search - O(n) (must loop)
const index = dynamic.indexOf(44);

// --- Method quick reference (mutating vs non-mutating) ---
// Mutating: push, pop, shift, unshift, splice, sort, reverse, fill
// Non-mutating (return new/derived): slice, concat, map, filter, reduce, flat, indexOf, includes
dynamic.slice(1, 4);        // O(k) — copy subarray, no mutation
dynamic.concat([5, 6]);     // O(n + m) — new array
[...dynamic, 7];            // O(n) — spread copy + add
dynamic.includes(44);       // O(n) — boolean search
dynamic.reverse();          // O(n) — in-place (mutates!)
dynamic.sort((a, b) => a - b); // O(n log n) — in-place; use comparator for numbers

// --- Creating / filling arrays ---
Array.from({ length: 5 }, (_, i) => i);   // [0,1,2,3,4]
Array(5).fill(0);                          // [0,0,0,0,0] — same reference for objects!
const grid = Array(3).fill(null).map(() => Array(3).fill(0)); // 3x3 matrix

// --- Copy gotcha: shallow vs “copy” ---
const orig = [{ x: 1 }];
const shallow = [...orig];   // shallow: shallow[0] === orig[0]
shallow[0].x = 99;           // mutates orig[0] too!
const deep = JSON.parse(JSON.stringify(orig)); // deep copy (no functions/dates)

// --- Classic DSA patterns (reference) ---
// Two pointers (e.g. two-sum, palindrome): left=0, right=len-1 or both from start
// Sliding window: expand right, shrink left when constraint broken; track window state
// Prefix sum: pre[i] = pre[i-1] + arr[i]; range sum [i,j] = pre[j] - pre[i-1]
// In-place swap: [a[i], a[j]] = [a[j], a[i]];

// Reverse in place (often needed)
function reverseInPlace(arr) {
  let l = 0, r = arr.length - 1;
  while (l < r) [arr[l], arr[r]] = [arr[r], arr[l]], l++, r--;
}

module.exports = { staticExample, dynamic, reverseInPlace };
