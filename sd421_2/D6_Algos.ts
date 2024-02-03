/*

// DijkstraDistance
Algorithm DijkstraDistances(Graph , s)
    priorityQueue = new PriorityQueue
    for all vertex of Graph.vertices() 
        if vertex = s
            setDistance (vertex, 0)
        else 
            setDistance (vertex, ∞ )
        priorityQueue.insertItem(getDistance(vertex), vertex);
        while (!prorityQueue.isEmpty())
                