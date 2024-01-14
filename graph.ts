export class Graph {
  adjacencyList: { [vertex: string]: string[] };
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string): boolean {
    if (this.adjacencyList[vertex]) return false;
    this.adjacencyList[vertex] = [];
    return true;
  }

  addEdge(vertex1: string, vertex2: string): boolean {
    if (
      this.adjacencyList[vertex1].includes(vertex2) ||
      this.adjacencyList[vertex2].includes(vertex1)
    )
      return false;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return true;
  }
}
