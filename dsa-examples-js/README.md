# dsa-examples-js — Runnable DSA Examples

Short, runnable JavaScript examples. **File number = difficulty / technical challenge** (01 = easiest → 31). Run all with `node run-all.js` to go through in order.

| #   | Topic                                          | File                                               |
| --- | ---------------------------------------------- | -------------------------------------------------- |
| 01  | Same digit frequency                           | [01-sameFrequency.js](01-sameFrequency.js)         |
| 02  | Big O (O(1), O(n), O(n²))                      | [02-bigO.js](02-bigO.js)                           |
| 03  | Classes (instance + static)                    | [03-classes.js](03-classes.js)                     |
| 04  | Recursion (countdown, factorial, collect odds) | [04-recursion.js](04-recursion.js)                 |
| 05  | Stack (LIFO)                                   | [05-stack.js](05-stack.js)                         |
| 06  | Queue (FIFO)                                   | [06-queue.js](06-queue.js)                         |
| 07  | Single Linked List                             | [07-singleLinkedList.js](07-singleLinkedList.js)   |
| 08  | Double Linked List                             | [08-doubleLinkedList.js](08-doubleLinkedList.js)   |
| 09  | Hash Table                                     | [09-hashTable.js](09-hashTable.js)                 |
| 10  | Sequence ADT                                   | [10-sequenceADT.js](10-sequenceADT.js)             |
| 11  | Binary Search Tree                             | [11-binarySearchTree.js](11-binarySearchTree.js)   |
| 12  | Max Binary Heap                                | [12-maxBinaryHeap.js](12-maxBinaryHeap.js)         |
| 13  | Priority Queue (min-heap)                      | [13-priorityQueue.js](13-priorityQueue.js)         |
| 14  | Recursion (advanced)                           | [14-recursionAdvanced.js](14-recursionAdvanced.js) |
| 15  | Graph (DFT, BFT)                               | [15-graph.js](15-graph.js)                         |
| 16  | Exam helpers                                   | [16-examHelpers.js](16-examHelpers.js)             |
| 17  | String compression (consecutive char counts)   | [17-stringCompression.js](17-stringCompression.js) |
| 18  | Longest substring without repeating chars     | [18-longestSubstringNoRepeat.js](18-longestSubstringNoRepeat.js) |
| 19  | Palindrome permutation detector               | [19-palindromePermutation.js](19-palindromePermutation.js)       |
| 20  | String reversal (no .reverse())               | [20-stringReversal.js](20-stringReversal.js)                     |
| 21  | First unique character                        | [21-firstUniqueCharacter.js](21-firstUniqueCharacter.js)         |
| 22  | Merge intervals                               | [22-mergeIntervals.js](22-mergeIntervals.js)                     |
| 23  | Maximum subarray sum (Kadane's algorithm)      | [23-maxSubarrayKadane.js](23-maxSubarrayKadane.js)               |
| 24  | Two Sum                                       | [24-twoSum.js](24-twoSum.js)                                     |
| 25  | Valid parentheses                             | [25-validParentheses.js](25-validParentheses.js)                 |
| 26  | Reverse linked list (iterative)               | [26-reverseLinkedList.js](26-reverseLinkedList.js)               |
| 27  | Merge two sorted lists                        | [27-mergeTwoSortedLists.js](27-mergeTwoSortedLists.js)           |
| 28  | Kth largest element                           | [28-kthLargest.js](28-kthLargest.js)                             |
| 29  | Level order traversal (BFS)                   | [29-levelOrderTraversal.js](29-levelOrderTraversal.js)           |
| 30  | Top K frequent elements                       | [30-topKFrequent.js](30-topKFrequent.js)                         |
| 31  | LRU Cache                                     | [31-lruCache.js](31-lruCache.js)                                 |

**Run one file:** `node dsa-examples-js/01-sameFrequency.js` (from repo root)  
**Run all:** `node dsa-examples-js/run-all.js` (runs 01 → 31)

**Testing:** Run regression tests: `node dsa-examples-js/run-tests.js`. Covers examples 18, 22, 23; more can be added by exporting the main function from an example and adding assertions in `run-tests.js`.
