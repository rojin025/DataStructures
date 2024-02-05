/*

// DijkstraDistance
Algorithm DijkstraDistances(Graph , s)// s = set of keys and element - vertex
    priorityQueue = new PriorityQueue
    for all vertex of Graph.vertices() 
        if vertex = s
            setDistance (vertex, 0)
        else 
            setDistance (vertex, ∞ )
        priorityQueue.insertItem(getDistance(vertex), vertex);
        while (!prorityQueue.isEmpty())
            u   // minimal vertex
        // incidentEdges = all adjacent edges of that vertex

// Fractional Knapsack Algo
Algorithm fractionalKnapsack(S, W)
Input: set S of items w/ benefit bi and weight wi; max. weight W
Output: amount xi of each item i to maximize benefit with weight at most W

for each item i in S 
    xi = 0
    vi = bi / wi    // {value}
    w = 0           //{total weight} 

while w < W do
    remove item i with highest vi
    xi = min{wi ,W-w}
    w  = w + min{wi ,W-w}