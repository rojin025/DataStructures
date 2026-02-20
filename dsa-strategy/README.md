# dsa-strategy — Problem-solving strategies (runnable)

Short strategy cheatsheets with **runnable JS** so you can practice each pattern. Use when you want to match a problem type to a strategy and see code in action.

| Strategy       | File                          | When to use |
|----------------|-------------------------------|-------------|
| Hash Map / Set | [hash-map-strategy.js](hash-map-strategy.js) | Two sum (unsorted), anagrams, first unique, contains duplicate, count/frequency |
| Two Pointers   | [two-pointers-strategy.js](two-pointers-strategy.js) | Sorted array pair sum, palindromes, in-place dupes, linked list middle |
| Binary Search  | [binary-search-strategy.js](binary-search-strategy.js) | Sorted/rotated array search, lower/upper bound, "min x such that …" (capacity, threshold) |
| Sliding Window | [sliding-window-strategy.js](sliding-window-strategy.js) | Contiguous subarray/substring: max sum of K, longest no repeat, min length sum ≥ target, at most K distinct |
| DFS            | [dfs-strategy.js](dfs-strategy.js) | Tree/graph traversal, path exists?, backtracking |
| BFS            | [bfs-strategy.js](bfs-strategy.js) | Shortest path (unweighted), level-order tree, word ladder, grid shortest path |

**Run:** `node dsa-strategy/hash-map-strategy.js`, `node dsa-strategy/two-pointers-strategy.js`, `node dsa-strategy/binary-search-strategy.js`, `node dsa-strategy/sliding-window-strategy.js`, `node dsa-strategy/dfs-strategy.js`, or `node dsa-strategy/bfs-strategy.js`

**Doc notes:** [Documents/dsa-strategy/](../Documents/dsa-strategy/) (e.g. [Hash Map Strategy](../Documents/dsa-strategy/Hash%20Map%20Strategy.md), [DFS Strategy](../Documents/dsa-strategy/DFS%20Strategy.md), [BFS Strategy](../Documents/dsa-strategy/BFS%20Strategy.md)).

For full strategy list and “when to use” workflow, see the plan: [.cursor/plans/leetcode_strategies_reference.plan.md](../.cursor/plans/leetcode_strategies_reference.plan.md). For implementation details (arrays, linked lists, etc.), see [../dsa-cheatsheet-js/](../dsa-cheatsheet-js/).
