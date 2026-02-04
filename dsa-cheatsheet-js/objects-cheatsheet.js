/**
 * JS OBJECTS — DSA Cheatsheet
 * ---------------------------
 * Key-value storage; keys are strings (or Symbols). Implementations use hash-like lookup.
 *
 * Time Complexity (plain object):
 *   Access by key    O(1) average
 *   Insert / Delete  O(1) average
 *   keys/values/entries  O(n)
 *   Space            O(n)
 *
 * Use when: String keys, config, JSON, simple lookup/count/group. ✅ JSON serialization, literal syntax.
 * Prefer Map when: Non-string keys, need insertion order, or want .size / no prototype keys.
 *
 * In JS: {} or new Object(); object keys are always stringified (obj[1] === obj["1"]).
 */

// ——— Creation ———
const literal = { a: 1, b: 2, c: 3 };
const fromKeys = Object.fromEntries([
  ["name", "alice"],
  ["age", 30],
]); // { name: 'alice', age: 30 }
const empty = {};
const withComputed = { ["key" + 1]: "v1", [Symbol("id")]: 42 }; // computed keys, Symbol keys

// ——— Access & mutation ———
literal.a; // 1 — dot (identifier only)
literal["b"]; // 2 — bracket (any string expression)
literal["missing"]; // undefined
literal.d = 4; // O(1) add
delete literal.d; // O(1) remove

// Check existence: hasOwn (own property only) vs "key" in obj (includes prototype)
Object.hasOwn(literal, "a"); // true ✅ preferred
literal.hasOwnProperty("a"); // true (avoid if obj may have no prototype)
"a" in literal; // true (includes inherited)

// ——— Iteration (O(n)) ———
Object.keys(literal); // ['a', 'b', 'c']
Object.values(literal); // [1, 2, 3]
Object.entries(literal); // [['a',1], ['b',2], ['c',3]]
for (const key of Object.keys(literal)) {
  /* key */
}
for (const [k, v] of Object.entries(literal)) {
  /* k, v */
}

// ——— Copy & merge ———
const copy = { ...literal }; // shallow copy
const merged = { ...literal, b: 99, e: 5 }; // later keys overwrite
Object.assign({}, literal, { b: 99 }); // same idea, mutates first arg

// Deep copy (no functions/dates/symbols):
const original = { x: 1, y: { z: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.y.z = 42;
// original.y.z is still 2 — deepCopy does NOT mutate the original

// ——— Immutability / integrity ———
Object.freeze(literal); // no add/delete/change; Object.isFrozen(literal) → true
Object.seal(literal); // no add/delete, can change values; Object.isSealed(literal) → true
// Object.preventExtensions(obj) — no new keys only

// ——— Destructuring ———
{
  const { a, b } = literal;
} // a=1, b=2
{
  const { a: x, b: y } = literal;
} // rename: x=1, y=2
{
  const { a, ...rest } = literal;
} // rest = { b: 2, c: 3 }
{
  const { missing = 0 } = literal;
} // default: missing = 0

// ——— DSA patterns ———
// Count frequency: object as counter
function countFreq(arr) {
  const count = {};
  for (const x of arr) count[x] = (count[x] ?? 0) + 1;
  return count;
}
// countFreq(['a','b','a','c','a']) → { a: 3, b: 1, c: 1 }

// Group by key
function groupBy(arr, keyFn) {
  const out = {};
  for (const x of arr) {
    const k = keyFn(x);
    if (!out[k]) out[k] = [];
    out[k].push(x);
  }
  return out;
}
// groupBy([{t:'a',v:1},{t:'b',v:2},{t:'a',v:3}], x => x.t) → { a: [..], b: [..] }

// Object as cache (memoization)
const cache = {};
function memoized(key, compute) {
  if (Object.hasOwn(cache, key)) return cache[key];
  cache[key] = compute();
  return cache[key];
}

// ——— Object vs Map (quick ref) ———
// ✅ Object: string keys, JSON, literal syntax, spread
// ✅ Map: any key type, insertion order, .size, no prototype keys, .has/.get/.set/.delete

module.exports = { literal, fromKeys, countFreq, groupBy, memoized };
