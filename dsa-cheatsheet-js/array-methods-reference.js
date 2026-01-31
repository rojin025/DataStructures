/**
 * ARRAY METHODS REFERENCE — Which method to use? (JS)
 * ---------------------------------------------------
 * Data transformations (map, filter, reduce), method picker by outcome,
 * and more array tools (groupBy, from, unique, intersection).
 */

// --- DATA TRANSFORMATIONS: map, filter, reduce ---
// Example array: [3, 1, 4, 3, 2]
const exampleArr = [3, 1, 4, 3, 2];

// MAP — returns new array with results of applying operation to every element (same length)
exampleArr.map((current) => current * 2); // → [6, 2, 8, 6, 4]

// FILTER — returns new array with elements that pass the test condition
exampleArr.filter((current) => current > 2); // → [3, 4, 3]

// REDUCE — boils all elements down to one single value (e.g. sum)
exampleArr.reduce((acc, current) => acc + current, 0); // → 13 (reduced value)

// --- WHICH ARRAY METHOD TO USE? (by desired outcome) ---
// 1. TO MUTATE ORIGINAL (use sparingly; prefer non-mutating when possible)
//    Add:     .push (end), .unshift (start)
//    Remove:  .pop (end), .shift (start), .splice (any position)
//    Others:  .reverse, .sort, .fill — "These should usually be avoided!" (mutate in place)

// 2. A NEW ARRAY BASED ON ORIGINAL (non-mutating)
//    Same length:     .map (for looping/transforming)
//    Reversed:        .toReversed
//    Filtered:        .filter (condition)
//    Sorted:          .toSorted
//    Portion:         .slice
//    With deleted:    .toSpliced
//    One item replaced: .with(index, value)
//    Join two arrays:  .concat
//    Flattened:       .flat, .flatMap

// 3. AN ARRAY INDEX
//    By value:        .indexOf(value)
//    By test:         .findIndex(fn), .findLastIndex(fn)
//    By position:     .at(index) — supports negative (e.g. -1 = last)

// 4. KNOW IF ARRAY INCLUDES
//    By value:        .includes(value)
//    By test:         .some(fn), .every(fn)

// 5. TO TRANSFORM TO VALUE (single value of any type)
//    Accumulator:     .reduce — boil down to number, string, boolean, array, or object

// 6. AN ARRAY ELEMENT
//    By test:         .find(fn), .findLast(fn)

// 7. A NEW STRING
//    By separator:    .join(separator)

// 8. TO JUST LOOP (no new array)
//    Callback:        .forEach — does not create a new array, just loops

// Quick reference: Mutating = push, pop, shift, unshift, splice, sort, reverse, fill
//                 Non-mutating = slice, concat, map, filter, reduce, flat, indexOf, includes

// --- MORE ARRAY TOOLS AND TECHNIQUES ---
// Grouping an array by categories (ES2024+)
// Object.groupBy(items, callback) — callback returns key; returns object { key: [items] }
const movements = [100, -50, 200, -100];
Object.groupBy(movements, (m) => (m > 0 ? "deposit" : "withdrawal"));
// → { deposit: [100, 200], withdrawal: [-50, -100] }

// Creating a new array from scratch
Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]
Array.from("hello"); // ['h','e','l','l','o']

// Creating a new array with n positions filled with a value (e.g. 0)
const emptySlots = new Array(5).fill(0); // → [0, 0, 0, 0, 0]

// Joining 2 or more arrays
const arr1 = [1, 2, 3],
  arr2 = [4, 5, 6];
[...arr1, ...arr2]; // → [1, 2, 3, 4, 5, 6]

// Creating a new array containing unique values from arr
// Set only keeps unique values (duplicates are dropped). Spread [...] turns the Set back into an array.
const withDupes = [1, 2, 2, 3, 3, 3];
[...new Set(withDupes)]; // → [1, 2, 3]

// Creating a new array containing unique elements present in BOTH arr1 and arr2 (intersection)
// ES2024+: Set.prototype.intersection
const a1 = [1, 2, 3, 4],
  a2 = [3, 4, 5, 6];
[...new Set(a1).intersection(new Set(a2))]; // → [3, 4]
// Older JS: [...new Set(a1)].filter((x) => new Set(a2).has(x))

// ========== DATA TRANSFORMATION USING ADVANCED ARRAY TOOLS ==========

// --- flatMap: map + flatten one level (no nested arrays) ---
// Use when: each element can become 0, 1, or many items and you want a flat result.
const sentences = ["Hello world", "foo bar"];
sentences.flatMap((s) => s.split(" ")); // → ['Hello', 'world', 'foo', 'bar']
// Same as: sentences.map(s => s.split(" ")).flat()
// Without .flat(): [[ 'Hello', 'world' ], [ 'foo', 'bar' ]] (nested arrays, one per string)

// Expand then filter (flatMap can return [] to "drop" an element)
[1, 2, 3, 4].flatMap((n) => (n % 2 === 0 ? [n, n * 10] : [])); // → [2, 20, 4, 40]

// --- Chaining: pipeline of transformations ---
const nums = [1, 2, 3, 4, 5, 6];
nums
  .filter((n) => n % 2 === 0)   // keep evens → [2, 4, 6]
  .map((n) => n * n)             // square → [4, 16, 36]
  .reduce((acc, n) => acc + n, 0); // sum → 56

// --- reduce → object (counts, lookup maps, grouping by key) ---
// Count how many times each word appears. acc = object we build; initial value {}.
// acc[word] ?? 0 = use current count if key exists, else 0 (so first time we do 0+1 = 1).
const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
words.reduce((acc, word) => {
  acc[word] = (acc[word] ?? 0) + 1;
  return acc;
}, {}); // → { apple: 3, banana: 2, cherry: 1 }

// Array of [key, value] → object
const pairs = [["a", 1], ["b", 2], ["c", 3]];
Object.fromEntries(pairs); // → { a: 1, b: 2, c: 3 }
// Build pairs with map then convert:
const people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }];
Object.fromEntries(people.map((p) => [p.name, p.age])); // → { Alice: 30, Bob: 25 }

// --- reduce → array (conditional building, flatten with logic) ---
[1, 2, 3, 4, 5].reduce((acc, n) => {
  if (n % 2 === 0) acc.push(n * 2);
  return acc;
}, []); // → [4, 8]

// --- Array.from for generated sequences + transform ---
Array.from({ length: 5 }, (_, i) => i * 2);     // → [0, 2, 4, 6, 8]
Array.from({ length: 3 }, () => ({ id: 0 }));   // → [{ id: 0 }, { id: 0 }, { id: 0 }] ✅ 3 separate objects
// Array(3).fill({ id: 0 }) ❌ one object shared; mutating one mutates all.
Array(3).fill(null).map(() => ({ id: 0 }));     // ✅ separate objects — fill then map

// --- Normalize list to map (by id) for O(1) lookup ---
const users = [{ id: "a", name: "Alice" }, { id: "b", name: "Bob" }];
const byId = users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {});
// byId['a'] → { id: 'a', name: 'Alice' }

// --- Pivot / reshape: rows to columns (transpose idea) ---
// For each column index, collect that index from every row → one new "column" array per index.
const rows = [[1, 2], [3, 4], [5, 6]];
const cols = rows[0].map((_, colIndex) => rows.map((row) => row[colIndex]));
// cols → [[1, 3, 5], [2, 4, 6]]

// --- Dedupe by a key (keep first occurrence) ---
const withIds = [{ id: 1, x: 1 }, { id: 2, x: 2 }, { id: 1, x: 99 }];
const seen = new Set();
withIds.filter((o) => {
  if (seen.has(o.id)) return false;
  seen.add(o.id);
  return true;
}); // → [{ id: 1, x: 1 }, { id: 2, x: 2 }]

// --- Running total (prefix sum) via reduce ---
[10, 20, 30, 40].reduce((acc, n) => {
  acc.push((acc.at(-1) ?? 0) + n);
  return acc;
}, []); // → [10, 30, 60, 100]

module.exports = { exampleArr };
