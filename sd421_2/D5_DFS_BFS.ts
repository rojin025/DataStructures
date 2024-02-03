/*
//DFS

Algorithm: Depth First Search
input : Graph = (V ,E)
Output :G, with all vertices marked as visited

    Initialize a Stack  stack
    Pick a starting vertex A and mark it as visited
    stack.push(A)
    while( !stack.isEmpty())
        Vertex = stack.peek()
        
        if some vertex adjacent to Vertex is not yet visited then
            unvisitedVertex = next unvisited vertex adjacent to Vertex
            mark unvisitedVertex
            stack.push( unvisitedVertex )
        else 
            stack.pop()

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

            