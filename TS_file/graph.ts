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
  removeEdge(vertex1: string, vertex2: string) {
    if (
      !this.adjacencyList[vertex1].includes(vertex2) ||
      !this.adjacencyList[vertex2].includes(vertex1)
    )
      return false;
    if (this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
    }
    if (this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
    }
    return true;
  }
  remove(vertexOf: string, remVertex: string) {
    if (this.adjacencyList[vertexOf].includes(remVertex)) {
      this.adjacencyList[vertexOf] = this.adjacencyList[vertexOf].filter(
        (vertex) => vertex !== remVertex
      );
    }
  }
  removeVertex(vertex: string) {
    if (!this.adjacencyList.hasOwnProperty(vertex)) return false;
    const listKeys = Object.keys(this.adjacencyList);
    for (const key of listKeys) {
      this.remove(key, vertex);
      console.log(key, "Key removed -> ", vertex);
    }
    delete this.adjacencyList[vertex];
    return true;
  }
  DFT_Recursive(rootVertex: string) {
    let result: string[] = [];
    let vistedVertices: { [vertex: string]: boolean } = {};
    const adjacencyList: { [vertex: string]: string[] } = this.adjacencyList;

    (function dftr(vertex: string) {
      if (!vertex) return null;
      vistedVertices[vertex] = true;
      result.push(vertex);
      for (const neighbor of adjacencyList[vertex]) {
        if (!vistedVertices[neighbor]) {
          dftr(neighbor);
        }
      }
    })(rootVertex);

    return result;
  }
  DFT_Stack(startVertex: string) {
    const stack: string[] = [startVertex];
    const result: string[] = [];
    const visitedVertex: { [vertex: string]: boolean } = {};
    let currentVertex: string;

    visitedVertex[startVertex] = true;
    while (stack.length) {
      console.log(stack);
      currentVertex = stack.pop() as string;
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visitedVertex[neighbor]) {
          visitedVertex[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFT(startVertex: string) {
    const queue: string[] = [startVertex];
    const result: string[] = [];
    const visitedVertex: { [vertex: string]: boolean } = {};
    let currentVertex: string;

    visitedVertex[startVertex] = true;
    while (queue.length) {
      currentVertex = queue.shift() as string;
      result.push(currentVertex);

      this.adjacencyList[currentVertex]
        .slice() /** to reverse order of traversal slice and reverse */
        .reverse()
        .forEach((neighbor) => {
          if (!visitedVertex[neighbor]) {
            visitedVertex[neighbor] = true;
            queue.push(neighbor);
          }
        });
    }
    return result;
  }
}
