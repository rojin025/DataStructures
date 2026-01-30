/**
 * Graph (adjacency list) — addVertex, addEdge, DFT, BFT.
 */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    return this;
  }
  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this;
  }
  DFT_Recursive(start) {
    const out = [],
      visited = {};
    const go = (v) => {
      if (visited[v]) return;
      visited[v] = true;
      out.push(v);
      this.adjacencyList[v].forEach(go);
    };
    go(start);
    return out;
  }
  BFT(start) {
    const out = [],
      visited = {},
      q = [start];
    visited[start] = true;
    while (q.length) {
      const v = q.shift();
      out.push(v);
      this.adjacencyList[v].forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          q.push(n);
        }
      });
    }
    return out;
  }
}

const g = new Graph();
["A", "B", "C", "D", "E", "F"].forEach((v) => g.addVertex(v));
g.addEdge("A", "B")
  .addEdge("A", "C")
  .addEdge("B", "D")
  .addEdge("C", "E")
  .addEdge("D", "E")
  .addEdge("D", "F")
  .addEdge("E", "F");
console.log("DFT(A):", g.DFT_Recursive("A"));
console.log("BFT(A):", g.BFT("A"));
