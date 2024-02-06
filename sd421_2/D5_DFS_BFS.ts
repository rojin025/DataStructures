/*
//DFS

Algorithm: Depth First Search
input : Graph = (V ,E)
Output :G, with all vertices marked as visited
function DFS(graph){
    // Initialize a Stack  
    let stack = [];

    //Pick a starting vertex A and mark it as visited
    stack.push(A)

    while( !stack.isEmpty())
        Vertex = stack.peek()
        
        if some vertex adjacent to Vertex is not yet visited then
            unvisitedVertex = next unvisited vertex adjacent to Vertex
            mark unvisitedVertex
            stack.push( unvisitedVertex )
        else 
            stack.pop()
}

// Implementation


Algorithm: Depth First Search
input : Graph = (V ,E)
Output :G, with all vertices marked as visited
function DFS(graph, startVertex) {
    let stack = []; // Initialize a stack

    let visited = {}; // Track visited vertices
    visited[startVertex] = true; // Mark the start vertex as visited
    stack.push(startVertex); // Push the start vertex onto the stack

    while (stack.length > 0) { // While the stack is not empty
        let currentVertex = stack.pop(); // Pop the top vertex from the stack

        // Process the current vertex
        console.log(currentVertex);

        // Traverse the neighbors of the current vertex
        for (let neighbor of graph[currentVertex]) {
            if (!visited[neighbor]) { // If the neighbor is not visited
                visited[neighbor] = true; // Mark it as visited
                stack.push(neighbor); // Push it onto the stack for further exploration
            }
        }
    }
}

// Example usage:
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
};

DFS(graph, 'A');


// BFS

Algorithm: Breadth First Search
Input: A simple connected undirected graph G = (V, E)
Output: G, with all vertices marked as visited

    Initialize A Queue = queue
    pick a starting vertex s and mark S as visited 
    queue.enqueue(S)
    while (!queue.isEmpty())
        vertex = queue.dequeue()
        forEach unvisited vertex W adjacent to vertex 
            mark W
            queue.enqueue(W)

// Implementation
            
function BFS(graph, startVertex) {
    let queue = []; // Initialize a queue
    let visited = {}; // Track visited vertices

    // Mark the start vertex as visited
    visited[startVertex] = true;
    queue.push(startVertex); // Enqueue the start vertex

    while (queue.length > 0) { // While the queue is not empty
        let currentVertex = queue.shift(); // Dequeue the front vertex

        // Process the current vertex
        console.log(currentVertex);

        // Traverse the neighbors of the current vertex
        for (let neighbor of graph[currentVertex]) {
            if (!visited[neighbor]) { // If the neighbor is not visited
                visited[neighbor] = true; // Mark it as visited
                queue.push(neighbor); // Enqueue it for further exploration
            }
        }
    }
}

// Example usage:
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
};

console.log("BFS Traversal:");
BFS(graph, 'A');
