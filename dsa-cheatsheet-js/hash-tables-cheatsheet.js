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
 */

// Native JS: Map - flexible keys, preserves insertion order (by spec)
const map = new Map();
map.set("grapes", 10000); // O(1) average
map.set(42, "answer");
map.get("grapes"); // 10000, O(1) average
map.has("grapes"); // true
map.delete("grapes"); // O(1) average

// Iteration (slower than array - "slow key iteration")
for (const [key, value] of map) {
  console.log(key, value);
}

// Simple hash function example (for learning; JS Map does this internally)
function simpleHash(key, size) {
  let hash = 0;
  const str = String(key);
  for (let i = 0; i < str.length; i++) {
    hash = (hash + str.charCodeAt(i) * i) % size;
  }
  return hash;
}

module.exports = { map, simpleHash };
