/**
 * HASH TABLES — DSA Cheatsheet (JS)
 * ---------------------------------
 * Key → hash function → index. Store key-value at that index (collisions handled by implementation).
 *
 * Collisions (two keys → same index): linear probing (next free slot), chaining (list at index),
 * or resizing (e.g. double when 60% full). Good implementations keep operations O(1) on average.
 *
 * Time: Search / Insert / Delete — Average O(1), Worst O(n). Space O(n).
 *
 * Use when: Key-based lookup, counting, deduplication by key. Flexible keys (any type in Map).
 * Avoid when: You need order or to iterate all keys often (iteration is slower than array).
 *
 * In JS: Map (any key type, insertion order) or Set (keys only). Plain object for string keys.
 * Object vs Map: ✅ Object = string keys, JSON, config; ✅ Map = any key, insertion order, no prototype keys.
 */

// Native JS: Map - flexible keys, preserves insertion order (by spec)
const map = new Map();

map.set("grapes", 10000); // O(1) average → [...map] → [['grapes', 10000]]
map.set(42, "answer"); // O(1) average → [...map] → [['grapes', 10000], [42, 'answer']]
map.get("grapes"); // 10000, O(1) average
map.get("missing"); // undefined ✅ use has() before get if you need to distinguish missing vs stored undefined
map.has("grapes"); // true, O(1) average
map.delete("grapes"); // O(1) average → [...map] → [[42, 'answer']]
map.size; // 1, O(1)
map.clear(); // removes all entries

// Iteration (slower than array - "slow key iteration")
for (const [key, value] of map) {
  console.log(key, value);
}
// Count pattern: map.set(k, (map.get(k) ?? 0) + 1);

// Set — keys only, no duplicates, O(1) add/has/delete
const set = new Set();
set.add("a");
set.add("a"); // no-op, already present
set.has("a"); // true
set.delete("a");

// WeakMap: object keys only, no .size, keys can be GC'd — use for private/metadata

// Simple hash function example (for learning; JS Map does this internally)
function simpleHash(key, size) {
  let hash = 0;
  const str = String(key);
  for (let i = 0; i < str.length; i++) {
    hash = (hash + str.charCodeAt(i) * i) % size;
  }
  return hash;
}
// simpleHash("grapes", 10) → e.g. 3
// simpleHash(42, 10) → index for key 42

module.exports = { map, set, simpleHash };
