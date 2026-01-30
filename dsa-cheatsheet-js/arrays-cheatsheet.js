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

module.exports = { staticExample, dynamic };
