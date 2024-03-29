/*   
Algorithm downHeap(H, size)
Input Array H representing a heap and the size of H (size > 1) 
Output H with the heap property restored

property  <-  false
i <- 1
while ! property do
    smallest  <-  indexOfMin(H, i, size) 
    if smallest ≠ i then
        swapElements(H[smallest], H[i])
        i <- smallest
    else
        property  <-  true 

return H
*/

/*
Algorithm upHeap(H, size)
    Input Array H representing a heap and the size of H (size > 1) 
    Output H with the heap property restored
    
    i <- size
    parent <- floor(size/2)
        while 1 £ parent Ù key(H[parent]) > key(H[i]) do
            swapElements(H[parent], H[i]) i <- parent
            parent ¬ floor(i/2)

Algorithm swapElements(p, q) 
    temp <- p.element
    p.element <- q.element  {swap elements}
    q.element <- temp
    
*/

/*
Algorithm indexOfMin(A, r, size)
    Input arrayA, an index r (referencing an item of A), and size of the
        heap stored in A
    Output the rank of element in A containing the smallest value

    smallest <- r
        left <- 2*r
        right <- 2*r + 1
    if left < size Ù key(A[left]) < key(A[smallest]) then
        smallest <- left
    if right < size Ù key(A[right]) < key(A[smallest]) then
        smallest <- right 
    return smallest
*/
