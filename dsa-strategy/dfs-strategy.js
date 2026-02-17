/**
 * DFS STRATEGY — When & how to use Depth-First Search (JS)
 * ---------------------------------------------------------
 * When to use: Tree/graph traversal, path exists?, cycles, connected components, backtracking.
 * Idea: Go deep (stack or recursion), then backtrack. O(V+E) for graph, O(n) for tree.
 *
 * See: ../dsa-cheatsheet-js/graphs-cheatsheet.js, ../dsa-cheatsheet-js/recursion-cheatsheet.js,
 *      ../dsa-cheatsheet-js/trees-cheatsheet.js
 */

// --- 1. Graph DFS (adjacency list) — recursive ---
// ✅ Visit, push, recurse on each neighbor; use Set to avoid revisiting
function dfsGraph(graph, start, visited = new Set(), result = []) {
  if (visited.has(start)) return result;
  visited.add(start);
  result.push(start);
  for (const neighbor of graph[start] || []) {
    dfsGraph(graph, neighbor, visited, result);
  }
  return result;
}

// --- 2. Graph DFS — iterative (stack) ---
// ✅ Same visit order as recursive; stack = explicit call stack
function dfsGraphIterative(graph, start) {
  const stack = [start];
  const visited = new Set([start]);
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    result.push(node);
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }
  return result;
}

// --- 3. Tree node (for examples below) ---
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// --- 4. Tree DFS — pre-order (node, left, right) ---
function dfsTreePreOrder(node, out = []) {
  if (!node) return out;
  out.push(node.value);
  dfsTreePreOrder(node.left, out);
  dfsTreePreOrder(node.right, out);
  return out;
}

// --- 5. Collect all root-to-leaf paths (DFS + backtracking) ---
// ✅ Push choice → recurse → pop (backtrack); collect path at leaf
function collectRootToLeafPaths(node, path = [], paths = []) {
  if (!node) return paths;
  path.push(node.value);
  if (!node.left && !node.right) {
    paths.push([...path]);
  } else {
    collectRootToLeafPaths(node.left, path, paths);
    collectRootToLeafPaths(node.right, path, paths);
  }
  path.pop(); // backtrack
  return paths;
}

// --- 6. Cycle detection in directed graph (DFS + recursion stack) ---
// ✅ If neighbor is in current path → cycle; use “gray” = in stack, “black” = done
function hasCycleDirected(graph) {
  const visited = new Set();
  const inStack = new Set();

  function dfs(node) {
    visited.add(node);
    inStack.add(node);
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true;
      } else if (inStack.has(neighbor)) return true;
    }
    inStack.delete(node);
    return false;
  }

  for (const node of Object.keys(graph)) {
    if (!visited.has(node) && dfs(node)) return true;
  }
  return false;
}

// --- 7. Count connected components (undirected: each DFS from unvisited = 1 component) ---
// ✅ For each unvisited node, run DFS and increment count
function countConnectedComponents(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }
  const visited = new Set();
  let count = 0;

  function dfs(i) {
    visited.add(i);
    for (const j of adj[i]) {
      if (!visited.has(j)) dfs(j);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
}

// --- Run examples ---
console.log("--- DFS strategy (practice) ---\n");

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

console.log("1. DFS graph (recursive) from 'a':", dfsGraph(graph, "a"));
console.log("2. DFS graph (iterative) from 'a':", dfsGraphIterative(graph, "a"));

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("3. Tree pre-order:", dfsTreePreOrder(root));
console.log("4. Root-to-leaf paths:", collectRootToLeafPaths(root));

const graphWithCycle = { 0: [1], 1: [2], 2: [0] };
const graphAcyclic = { 0: [1, 2], 1: [], 2: [] };
console.log("5. hasCycleDirected (cycle 0→1→2→0):", hasCycleDirected(graphWithCycle));
console.log("   hasCycleDirected (acyclic):", hasCycleDirected(graphAcyclic));

// n=5, edges [[0,1],[1,2],[3,4]] → 2 components
console.log("6. countConnectedComponents(5, [[0,1],[1,2],[3,4]]):", countConnectedComponents(5, [[0, 1], [1, 2], [3, 4]]));

module.exports = {
  dfsGraph,
  dfsGraphIterative,
  TreeNode,
  dfsTreePreOrder,
  collectRootToLeafPaths,
  hasCycleDirected,
  countConnectedComponents,
};
