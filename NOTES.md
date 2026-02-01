---
title: "Data Structures, Big O & TypeScript — Notes & Quick Reference"
status: "active"
tags: [js, data-structures, big-o, typescript, reference, index, learning]
version: "2.0.0"
created: "2025-01-30"
last_updated: "2025-01-30"
purpose: "JS-first index for DS & algorithms; ties ZTM cheatsheets to this repo. Primary focus: runnable JS in dsa-examples-js/."
category: "index"
source: "ZTM Cheatsheets (Data Structures, Big O, TypeScript)"
---

# Data Structures, Big O & TypeScript — Notes

JS-first notes tied to **Zero to Mastery cheatsheets** and this repo. **Start with the `dsa-examples-js/` folder**; use TypeScript and `TS_file/` once you're comfortable with the logic in JavaScript.

---

## Planning & how this note fits .cursor rules

- **This note** = single **index / Map of Content** for the repo. It links to JS examples first, then TS/repo.
- **Edits** that only change content inside this file (e.g. add a section, fix a link, add a JS run command) don’t require a separate plan/approval step.
- **New notes or folder changes** (e.g. splitting into `notes/dsa-examples-js/`, `notes/BigO.md`) do require a plan and your approval first (see `.cursor/rules/obsidian-java-notes.mdc`).
- **Documentation skill** (`.cursor/skills/app-building-documentation`): Use “What / Why / How / When” when you later document implementations; this note is the **navigation hub** and learning path, not implementation docs.

---

# Part 1 — JS first: index & learning path

All runnable examples live in **`dsa-examples-js/`**. Run with Node (no build step).

## Run commands

```bash
# Run one example
node dsa-examples-js/01-sameFrequency.js

# Run all examples in order
node dsa-examples-js/run-all.js
```

## JS quick reference (primary)

| #   | JS file (by difficulty)                   | Topic                                    | See also (TS / repo)                              |
| --- | ----------------------------------------- | ---------------------------------------- | ------------------------------------------------- |
| 01  | `dsa-examples-js/01-sameFrequency.js`     | Same digit frequency between two numbers | `TS_file/sameFrequency.ts`                        |
| 02  | `dsa-examples-js/02-bigO.js`              | Count evens, O(1) / O(n) / O(n²)         | `sd421/d1_BigO.ts`                                |
| 03  | `dsa-examples-js/03-classes.js`           | Student, Point (instance + static)       | `TS_file/classRevision.ts`                        |
| 04  | `dsa-examples-js/04-recursion.js`         | Countdown, factorial, collect odds       | `TS_file/recursion.ts`, `sd421/D4_Recursion.ts`   |
| 05  | `dsa-examples-js/05-stack.js`             | Stack (LIFO)                             | `TS_file/stack.ts`, `sd421/D3_StackNQueue.ts`     |
| 06  | `dsa-examples-js/06-queue.js`             | Queue (FIFO)                             | `TS_file/queue.ts`                                |
| 07  | `dsa-examples-js/07-singleLinkedList.js`  | SLL: push, pop, get, reverse             | `TS_file/singleLinkedList.ts`, `sd421/D2_DLL.ts`  |
| 08  | `dsa-examples-js/08-doubleLinkedList.js`  | DLL: push, pop, shift, unshift, get      | `TS_file/DoubleLinkedList.ts`                     |
| 09  | `dsa-examples-js/09-hashTable.js`         | Hash table: set, get, keys, values       | `TS_file/hashTable.ts`, `sd421_2/D1_Hash.ts`      |
| 10  | `dsa-examples-js/10-sequenceADT.js`       | Remove duplicate, isPermutation          | `sd421/D2_Sequence_ADT.ts`                        |
| 11  | `dsa-examples-js/11-binarySearchTree.js`  | BST: insert, find, BFS, DFS              | `TS_file/binarySearchTree.ts`, `sd421/D5_Tree.ts` |
| 12  | `dsa-examples-js/12-maxBinaryHeap.js`     | Max heap: insert, extractMax             | `TS_file/maxBinaryHeap.ts`, `sd421/D6_Heap.ts`    |
| 13  | `dsa-examples-js/13-priorityQueue.js`     | Min-heap priority queue                  | `TS_file/priorityQueue.ts`                        |
| 14  | `dsa-examples-js/14-recursionAdvanced.js` | Fibonacci, isEven, power                 | `sd421/D4_Recursion.ts`                           |
| 15  | `dsa-examples-js/15-graph.js`             | Graph: addVertex, addEdge, DFT, BFT      | `TS_file/graph.ts`, `sd421_2/D5_DFS_BFS.ts`       |
| 16  | `dsa-examples-js/16-examHelpers.js`       | isEvenMutual, sum, sumFirst              | `sd421/midExam.ts`                                |

**Sorting / searching:** See `dsa-cheatsheet-js/`; also `TS_file/sort.ts`, `TS_file/searchingAlgo.ts`, `sd421/D7_SelectionSort.ts`, `sd421/D8_RadixNBucketSort.ts`.

## Suggested learning order (by difficulty, 01 → 16)

1. **Basics:** `01` → `02` → `03` → `04` (frequency, Big O, classes, recursion).
2. **Linear structures:** `05` → `06` → `07` → `08` (stack, queue, SLL, DLL).
3. **Hash & sequences:** `09` → `10` (hash table, sequence ADT).
4. **Trees & heaps:** `11` → `12` → `13` (BST, max heap, priority queue).
5. **Advanced:** `14` → `15` → `16` (recursion advanced, graph DFT/BFT, exam helpers).

---

# Part 2 — Big O (use with dsa-examples-js/02-bigO.js)

_From: Big O Cheatsheet (ZTM)._

## Complexity at a glance

| Big O          | Name        | When you see it                            |
| -------------- | ----------- | ------------------------------------------ |
| **O(1)**       | Constant    | No loops; direct access (e.g. `arr[0]`)    |
| **O(log n)**   | Logarithmic | Sorted search (e.g. binary search)         |
| **O(n)**       | Linear      | One loop over `n` items                    |
| **O(n log n)** | Log linear  | Good sorting (merge, quick sort)           |
| **O(n²)**      | Quadratic   | Two nested loops; compare every pair       |
| **O(2^n)**     | Exponential | Recursive branching (e.g. naive Fibonacci) |
| **O(n!)**      | Factorial   | Loop per element (rare)                    |

**Reminders:** Half a collection is still **O(n)**. Two separate collections: **O(a + b)**. Two nested: **O(a × b)**.

## What costs time / space?

- **Time:** operations, comparisons, loops, function calls.
- **Space:** variables, data structures, function call stack, allocations.

## Rules (Rule Book)

1. **Worst case** — always consider worst case.
2. **Drop constants** — O(2n) → O(n).
3. **Different inputs → different variables** — O(a + b) in sequence; O(a × b) if nested.
4. **Drop non-dominant terms** — O(n² + n) → O(n²).

## In this repo (JS first)

- **Run:** `node dsa-examples-js/02-bigO.js` (count evens, O(1)/O(n)/O(n²) examples).
- **See also:** `sd421/d1_BigO.ts` (e.g. `countEvenNumIn`, add-up-to-target).

---

# Part 3 — Data structures (JS file first for each)

_From: Data Structures Cheatsheet (ZTM)._

**Operations:** Insertion, Deletion, Traversal, Searching, Sorting, Access.

---

## Arrays

- **What:** Contiguous storage; fixed or dynamic size.
- **Time:** Access O(1); Search / Insert / Delete O(n). **Space:** O(n).
- **Good at:** Fast lookups, fast push/pop, ordered. **Bad at:** Slow insert (not at end), slow delete, fixed size\*.

**Run:** No dedicated file in `dsa-examples-js/`; see `ZTM/Arrays/` (array.ts, moveZeroes, reverseStr).

---

## Hash table

- **What:** Key → hash function → index; key-value pairs. Collisions: linear probing, chaining, or resizing (e.g. double when ~60% full); good implementations keep ops O(1) on average.
- **Time:** Search/Insert/Delete average O(1), worst O(n). **Space:** O(n).
- **Use when:** Key-based lookup, counting, deduplication by key; flexible keys (any type in Map). **Avoid when:** You need order or to iterate all keys often (iteration slower than array).
- **In JS:** Map (any key type, insertion order) or Set (keys only, no duplicates). Plain object for string keys. **Object vs Map:** Object = string keys, JSON, config; Map = any key, insertion order, no prototype keys. WeakMap = object keys only, no `.size`, keys can be GC'd (private/metadata).
- **Good at:** Fast lookups\*, fast inserts, flexible keys. **Bad at:** Unordered, slow key iteration.

**Run:** `node dsa-examples-js/09-hashTable.js` · **Cheatsheet:** `dsa-cheatsheet-js/hash-tables-cheatsheet.js` · **See also:** `TS_file/hashTable.ts`, `sd421_2/D1_Hash.ts`

---

## Linked list

- **What:** Nodes with value + pointer(s). Singly: one `next`; doubly: `next` + `prev`.
- **Time:** Prepend/append O(1); lookup/insert/delete O(n).
- **Good at:** Fast insert/delete, ordered, flexible size. **Bad at:** Slow lookup, more memory.
- **reverse() idea:** prev = null; walk with `current`; set `current.next = prev`, then prev = current, current = next; at end set head = prev.

**Run:** `node dsa-examples-js/07-singleLinkedList.js` · `node dsa-examples-js/08-doubleLinkedList.js` · **See also:** `TS_file/singleLinkedList.ts`, `TS_file/DoubleLinkedList.ts`, `sd421/D2_DLL.ts`

---

## Stack (LIFO)

- **Operations:** push O(1), pop O(1), peek O(1). **Use when:** last in first out (undo, call stack).

**Run:** `node dsa-examples-js/05-stack.js` · **See also:** `TS_file/stack.ts`, `sd421/D3_StackNQueue.ts`

---

## Queue (FIFO)

- **Operations:** enqueue O(1), dequeue O(1), peek O(1), isEmpty O(1). **Use when:** first in first out (tasks, BFS).

**Run:** `node dsa-examples-js/06-queue.js` · **See also:** `TS_file/queue.ts`

---

## Binary search tree (BST)

- **What:** Left subtree < node < right subtree.
- **Time:** Insert/search/delete average O(log n), worst O(n) if unbalanced. **Space:** O(n). **Balanced:** AVL, Red-Black.
- **Good at:** Better than O(n) when balanced, ordered, flexible size. **Bad at:** No O(1) ops; can degenerate to list.

**Run:** `node dsa-examples-js/11-binarySearchTree.js` · **See also:** `TS_file/binarySearchTree.ts`, `sd421/D5_Tree.ts`, `sd421_2/AVL.ts`

---

## Binary heap

- **What:** Complete binary tree. Max heap: parent ≥ children; min heap: parent ≤ children. No ordering between siblings.
- **Time:** Insert O(log n), extractMax/extractMin O(log n). Lookup by value O(n).
- **Good at:** Priority, fast insert, flexible size. **Bad at:** Slow lookup.

**Run:** `node dsa-examples-js/12-maxBinaryHeap.js` · **See also:** `TS_file/maxBinaryHeap.ts`, `sd421/D6_Heap.ts`

---

## Priority queue

- **What:** Dequeue by priority (e.g. highest first). Often implemented with a min-heap.

**Run:** `node dsa-examples-js/13-priorityQueue.js` · **See also:** `TS_file/priorityQueue.ts`

---

## Graph

- **What:** Vertices + edges. Directed/undirected, weighted/unweighted. Representations: adjacency list, matrix, edge list.
- **Good at:** Modeling relationships. **Bad at:** Scaling.

**Run:** `node dsa-examples-js/15-graph.js` · **See also:** `TS_file/graph.ts`, `sd421_2/D5_DFS_BFS.ts`

---

# Part 4 — Algorithms (JS first)

## Recursion

- **Base case** — stops recursion (avoids stack overflow). **Recursive case** — call self with smaller problem.
- **When:** Tree/graph traversal, divide-and-conquer, identical subproblems.
- **Factorial:** `n === 0 || n === 1` return 1; else `n * factorial(n - 1)`.
- **Fibonacci (naive):** O(2^n). Better: iterative O(n) or memoization.

**Run:** `node dsa-examples-js/04-recursion.js` · `node dsa-examples-js/14-recursionAdvanced.js` · `node dsa-examples-js/16-examHelpers.js` · **See also:** `TS_file/recursion.ts`, `sd421/D4_Recursion.ts`, `sd421/midExam.ts`

---

## Sorting (time complexity)

| Algorithm | Average    | Worst      | Notes                        |
| --------- | ---------- | ---------- | ---------------------------- |
| Bubble    | O(n²)      | O(n²)      | Compare adjacent, swap       |
| Selection | O(n²)      | O(n²)      | Pick min from unsorted, swap |
| Insertion | O(n²)      | O(n²)      | Best O(n) nearly sorted      |
| Merge     | O(n log n) | O(n log n) | Divide, merge. Stable.       |
| Quick     | O(n log n) | O(n²)      | Pivot, partition. In-place.  |

**See also:** `TS_file/sort.ts`, `sd421/D7_SelectionSort.ts`, `sd421/D8_RadixNBucketSort.ts` (no JS file in `dsa-examples-js/`).

---

## Searching

- **Linear:** O(n). One loop; any data.
- **Binary:** O(log n). Sorted array; middle, then left or right half.

**See also:** `TS_file/searchingAlgo.ts`

---

## BFS vs DFS (graphs/trees)

|           | BFS                                      | DFS                               |
| --------- | ---------------------------------------- | --------------------------------- |
| Structure | Queue                                    | Stack or recursion                |
| Order     | Level by level                           | Branch by branch                  |
| Use       | Shortest path (unweighted), closer nodes | Path exists?, cycles, less memory |
| Time      | O(V + E)                                 | O(V + E)                          |

**Run:** `node dsa-examples-js/15-graph.js` (BFT, DFT) · **See also:** `TS_file/graph.ts`, `TS_file/treeTraversal.ts`, `sd421_2/D5_DFS_BFS.ts`

---

## Dynamic programming (DP)

- **Idea:** Subproblems + store results (memoization) to avoid recomputation.
- **When:** Can split into subproblems, recursive solution, overlapping subproblems → memoize.

---

# Part 5 — TypeScript (after JS)

Use this section once you’re comfortable with the logic in JS and want to add types and repo TS files.

## Quick syntax reference

- **Variables:** `let x: string;` · `const n: number = 5;`
- **Functions:** `function sum(a: number, b: number): number { return a + b; }` · Arrow: `(a, b) => a + b`
- **Arrays:** `const arr: number[] = [1,2,3];` · **Tuples:** `let book: [string, number] = ["title", 1980];`
- **Control flow:** `if` / `else` / `switch` (with `break`)
- **Loops:** `for`, `while`, `for (const x of arr)`
- **Classes:** `class C { constructor(private a: number, public b: number) {} }` · `implements Interface`
- **Interfaces:** `interface I { method(): number; }`
- **Maps:** `const m = new Map<string, number>();` · `m.set("k", 1);` · `m.get("k");`
- **Exceptions:** `throw new Error("msg");` · `try { } catch (e) { } finally { }`
- **Unions:** `type Color = "red" | "green" | "blue";`
- **Optional chaining:** `obj?.prop?.nested;`
- **Utility types:** `Pick<T, K>`, `Omit<T, K>`, `Required<T>`, `Readonly<T>`
- **Generics:** `function first<T>(arr: T[]): T | undefined` · `class Stack<T> { }`
- **Async:** `async function f(): Promise<X>` · `await g();`

**See also:** TypeScript Cheatsheet (ZTM) PDF; `TS_file/` and `sd421/` for full TS implementations.

---

# Part 6 — Confidence builders & planning

## What to do next (JS-first)

1. **Run all JS examples** — `node dsa-examples-js/run-all.js` (runs 01→16 by difficulty).
2. **One JS file per day** — Pick one row from the JS quick reference; run the file, read it, then re-type it without looking.
3. **Big O drill** — Open `dsa-examples-js/02-bigO.js`; for each function, label O(1), O(n), or O(n²) and say why.
4. **Port one to TS** — After you’re comfortable with a JS file (e.g. `04-singleLinkedList.js`), re-implement the same logic in TypeScript in `TS_file/` or `sd421/`.
5. **Cheatsheet + code** — Open a ZTM PDF; for each section, find the matching JS file in the table and run it.

## When to create new notes (per .cursor rules)

- **New note:** When you add a **new** topic or split an atomic concept (e.g. a dedicated `notes/BigO.md` or `notes/JS-Stack.md`). Plan first and get approval before creating files or changing folder structure.
- **Edit this note:** For updates that only change content inside `NOTES.md` (typos, new links, new run commands, reordering), you can edit directly.

This note is your **index/MOC** and JS-first learning path; keep it as the single entry point and link to `dsa-examples-js/` first, then TS and repo.
