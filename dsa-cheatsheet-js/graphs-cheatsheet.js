/**
 * GRAPHS — DSA Cheatsheet (JS)
 * ---------------------------
 * Vertices + edges. Directed (one-way) vs undirected; weighted (cost on edge) vs unweighted.
 * Represent as: adjacency list (node → list of neighbors) — common and O(V+E); or adjacency matrix O(V²).
 *
 * BFS (queue): level by level. O(V+E). Use for: shortest path in unweighted graph, "nodes at distance k".
 * DFS (stack/recursion): go deep. O(V+E). Use for: path exists?, cycles, topological order, explore all.
 *
 * Shortest path with weights: Dijkstra (non-negative edges), Bellman-Ford (allows negative).
 *
 * Use when: Networks, dependencies, maps, social connections. Choose BFS vs DFS by problem (shortest vs any path, memory).
 */

// --- Adjacency list (graph as object: node -> list of neighbors) ---
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// BFS - queue; mark visited; process level by level
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}

// DFS - stack (or recursion); go deep first
function dfs(graph, start, visited = new Set(), result = []) {
  if (visited.has(start)) return result;
  visited.add(start);
  result.push(start);
  for (const neighbor of graph[start] || []) {
    dfs(graph, neighbor, visited, result);
  }
  return result;
}

module.exports = { graph, bfs, dfs };
