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

// --- Run examples ---
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

console.log("DFS graph (recursive) from 'a':", dfsGraph(graph, "a"));
console.log("DFS graph (iterative) from 'a':", dfsGraphIterative(graph, "a"));

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Tree pre-order:", dfsTreePreOrder(root));
console.log("Root-to-leaf paths:", collectRootToLeafPaths(root));

module.exports = {
  dfsGraph,
  dfsGraphIterative,
  TreeNode,
  dfsTreePreOrder,
  collectRootToLeafPaths,
};
