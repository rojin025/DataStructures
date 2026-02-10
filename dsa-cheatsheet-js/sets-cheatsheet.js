/**
 * SETS — DSA Cheatsheet (JS)
 * --------------------------
 * Unordered collection of unique values (no duplicates). Backed by hash table; equality by SameValueZero.
 *
 * Time Complexity:
 *   add / has / delete   O(1) average
 *   size                 O(1)
 *   clear                O(n) (or O(1) depending on impl)
 *   iteration            O(n)
 *   Space                O(n)
 *
 * Use when: Deduplication, O(1) membership checks, tracking "seen" items, sliding-window uniqueness.
 * Avoid when: You need key-value pairs (use Map), order by insertion is enough but you need index (array), or counts (Map).
 *
 * In JS: Set (any value type), WeakSet (object keys only, no .size, keys can be GC'd).
 */

// --- Creation ---
const set = new Set();
// From iterable: duplicates removed
new Set([1, 2, 2, 3]); // Set(3) { 1, 2, 3 }
new Set("hello"); // Set(4) { 'h', 'e', 'l', 'o' }
new Set([{ id: 1 }, { id: 1 }]); // Set(2) — two objects (different refs) ✅ use primitives or same ref for dedupe

// --- Core API (all O(1) average) ---
set.add("a"); // O(1) → Set(1) { 'a' }
set.add("a"); // no-op, already present → still Set(1) { 'a' }
set.add(42);
set.has("a"); // true, O(1)
set.has("missing"); // false, O(1)
set.delete("a"); // true (was present), O(1) → Set(1) { 42 }
set.delete("x"); // false (not present)
set.size; // 1, O(1)
set.clear(); // removes all, set.size → 0

// --- Iteration (insertion order) ---
const s = new Set([3, 1, 2]);
for (const v of s) {
  /* 3, 1, 2 */
}
s.keys(); // same as values() for Set — SetIterator
s.values(); // SetIterator — [...s.values()] → [3, 1, 2]
s.entries(); // SetIterator — [...s.entries()] → [[3,3],[1,1],[2,2]] (value, value for Map compatibility)
[...s]; // [3, 1, 2] — spread to array

// ========== Common techniques ==========

// Dedupe array: O(n)
const arr = [1, 2, 2, 3, 1];
[...new Set(arr)]; // [1, 2, 3] ✅ preserves first occurrence order

// O(1) membership instead of array.includes (O(n))
const allowed = new Set(["read", "write"]);
allowed.has("read"); // true ✅ use Set when you check membership often

// Track "seen" in one pass (e.g. two-sum style, cycle detection)
function hasDuplicate(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}
// hasDuplicate([1,2,2,3]) → true

// Set operations (return new Sets)
function union(a, b) {
  return new Set([...a, ...b]);
}
function intersect(a, b) {
  return new Set([...a].filter((x) => b.has(x)));
}
function difference(a, b) {
  return new Set([...a].filter((x) => !b.has(x)));
}
// union(Set{1,2}, Set{2,3}) → Set(3) { 1, 2, 3 }
// intersect(Set{1,2}, Set{2,3}) → Set(1) { 2 }
// difference(Set{1,2}, Set{2,3}) → Set(1) { 1 }

// Sliding window + Set: e.g. longest substring with unique chars — expand right, add to set; on repeat, shrink left and delete from set. See dsa-examples-js (longestSubstringNoRepeat).

// ========== Best practices ==========
// ✅ Use Set for: dedupe, membership, "seen" tracking, uniqueness constraint in windows.
// ✅ Prefer Set over array when you only need membership and do many .has() calls.
// ✅ Use same reference or primitives if you want object "identity" dedupe; object keys compare by reference.
// ❌ Don't use Set when you need counts (use Map) or key-value (use Map).
// WeakSet: object keys only, no .size, no iteration — use for private/metadata or "was seen" for objects only.

// --- WeakSet (object keys only, no .size, keys can be garbage-collected) ---
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
weakSet.has(obj); // true
weakSet.delete(obj);

module.exports = {
  set,
  s,
  hasDuplicate,
  union,
  intersect,
  difference,
  weakSet,
};
