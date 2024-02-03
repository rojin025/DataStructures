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
