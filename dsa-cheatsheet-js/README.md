# Data Structures & Algorithms — Quick Notes (JS)

A **JavaScript** cheatsheet for data structures and algorithms: definitions, time complexity, when to use what, and runnable examples with comments. Optimized for quick reference and learning.

## Contents

| Topic                   | File                                | Focus                                       |
| ----------------------- | ----------------------------------- | ------------------------------------------- |
| **Arrays**              | `arrays-cheatsheet.js`              | Contiguous storage, access vs insert/delete |
| **Hash Tables**         | `hash-tables-cheatsheet.js`         | Key-value, collisions, Map in JS            |
| **Linked Lists**        | `linked-list-cheatsheet.js`         | Singly/doubly, reverse in place             |
| **Stacks & Queues**     | `stacks-queues-cheatsheet.js`       | LIFO/FIFO, when to use each                 |
| **Trees**               | `trees-cheatsheet.js`               | BST, heap, traversals (in/pre/post-order)   |
| **Tries**               | `trie-cheatsheet.js`                | Prefix tree, insert/search/startsWith       |
| **Graphs**              | `graphs-cheatsheet.js`              | Adjacency list, BFS, DFS                    |
| **Recursion**           | `recursion-cheatsheet.js`           | Base case, factorial, fibonacci             |
| **Sorting**             | `sorting-cheatsheet.js`             | Bubble, selection, insertion, merge, quick  |
| **Searching**           | `searching-cheatsheet.js`           | Linear, binary search                       |
| **Dynamic Programming** | `dynamic-programming-cheatsheet.js` | Memoization, caching, when to use DP        |

## Running

From repo root or this directory:

```bash
cd dsa-cheatsheet-js
node arrays-cheatsheet.js
node sorting-cheatsheet.js
# etc.
```

Most files define and export only; run with Node to load, or `require()` in another script.

## Learning tips

- Start with **Arrays** and **Hash Tables** (most common in interviews and apps).
- **Recursion** and **Sorting** build intuition for divide-and-conquer.
- **Graphs** (BFS/DFS) and **Dynamic Programming** (memoization) are worth practicing with small examples.
- Each file header summarizes **when to use** and **when to avoid** that structure or technique.
