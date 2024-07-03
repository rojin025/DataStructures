Kruskal(Graph):
Input: A simple connected weighted graph Graph with n vertices and m edges
Output: A minimum spanning tree T for Graph

for each vertex v in Graph{
    C(v) = {v} // Define an elementary cluster 
}

//Initialize a priority queue Queue to contain all edges in Graph, 
//using the weights as keys.
for all edge of Graph.edges()
    Queue.enqueue(weight(edge), edge);

T = {} // T will ultimately contain the edges of an MST

while T has fewer than n - 1 edges {
    let currentEdge = Queue.removeMin()
    (u,v) = Graph.endVertices(currentEdge)
    
    if C(u) != C(v) then
        Add edge edge to T
        Merge C(u) and C(v) into one cluster.
    
    }

return T;
