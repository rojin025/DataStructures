/**
 * BFS STRATEGY — When & how to use Breadth-First Search (JS)
 * -----------------------------------------------------------
 * When to use: Shortest path (unweighted), level-order tree, word ladder, grid shortest path.
 * Idea: Queue = level by level; first time we reach a node we have shortest distance. O(V+E) for graph.
 *
 * See: ../dsa-cheatsheet-js/graphs-cheatsheet.js, ../dsa-cheatsheet-js/stacks-queues-cheatsheet.js,
 *      ../dsa-cheatsheet-js/trees-cheatsheet.js
 */

// --- 1. Shortest path in unweighted graph (adjacency list) — return distance or -1 ---
// ✅ Queue + visited; enqueue (node, dist); first time we reach target = shortest
function shortestPathUnweighted(graph, start, end) {
  const queue = [[start, 0]];
  const visited = new Set([start]);

  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === end) return dist;
    for (const neighbor of graph[node] || []) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      queue.push([neighbor, dist + 1]);
    }
  }
  return -1;
}

// --- 2. Level-order tree traversal — return array of values level by level ---
// ✅ Queue; each iteration process current level (queue length), push next level
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}

// --- 3. Word ladder — shortest transformation from beginWord to endWord (one letter per step) ---
// ✅ BFS: state = word; neighbors = words in wordList that differ by exactly one char
function wordLadder(beginWord, endWord, wordList) {
  const set = new Set(wordList);
  if (!set.has(endWord)) return 0;
  const queue = [[beginWord, 1]];
  const visited = new Set([beginWord]);

  while (queue.length) {
    const [word, steps] = queue.shift();
    if (word === endWord) return steps;
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const next = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (!set.has(next) || visited.has(next)) continue;
        visited.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }
  return 0;
}

// --- 4. Grid shortest path (4-direction) — 0 = empty, 1 = obstacle; return steps or -1 ---
// ✅ Queue [r, c, dist]; neighbors = 4 dirs; bounds and obstacle check
const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function gridShortestPath(grid, start, end) {
  const rows = grid.length;
  const cols = grid[0].length;
  const [sr, sc] = start;
  const [er, ec] = end;
  if (grid[sr][sc] === 1 || grid[er][ec] === 1) return -1;

  const queue = [[sr, sc, 0]];
  const visited = new Set([`${sr},${sc}`]);

  while (queue.length) {
    const [r, c, dist] = queue.shift();
    if (r === er && c === ec) return dist;
    for (const [dr, dc] of DIRS) {
      const nr = r + dr;
      const nc = c + dc;
      const key = `${nr},${nc}`;
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] === 1 || visited.has(key)) continue;
      visited.add(key);
      queue.push([nr, nc, dist + 1]);
    }
  }
  return -1;
}

// --- 5. BFS traversal (graph) — collect nodes in BFS order ---
// ✅ Same as shortest path but no target; useful for "visit all reachable"
function bfsGraph(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    for (const neighbor of graph[node] || []) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }
  return result;
}

// --- Run examples ---
console.log("--- BFS strategy (practice) ---\n");

const graph = {
  a: ["b", "c"],
  b: ["d", "a"],
  c: ["e"],
  d: ["f"],
  e: ["c"],
  f: [],
};
console.log("1. shortestPathUnweighted(graph, 'a', 'f'):", shortestPathUnweighted(graph, "a", "f"));
console.log("   shortestPathUnweighted(graph, 'a', 'e'):", shortestPathUnweighted(graph, "a", "e"));
console.log("   bfsGraph(graph, 'a'):", bfsGraph(graph, "a"));

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log("2. levelOrder(root):", levelOrder(root));

console.log("3. wordLadder('hit', 'cog', ['hot','dot','dog','lot','log','cog']):", wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log("   wordLadder('hit', 'cog', ['hot','dot','dog','lot','log']):", wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));

const grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
console.log("4. gridShortestPath(grid, [0,0], [2,2]):", gridShortestPath(grid, [0, 0], [2, 2]));
console.log("   gridShortestPath(grid, [0,0], [1,1]):", gridShortestPath(grid, [0, 0], [1, 1]));

module.exports = {
  shortestPathUnweighted,
  TreeNode,
  levelOrder,
  wordLadder,
  gridShortestPath,
  bfsGraph,
};
