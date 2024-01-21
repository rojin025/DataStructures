// Find Sum with Tail Recursion
/*
Algorithm sum(T)
    return sumHelper(T, T.root())

Algorithm sumHelper(T, p)
    // Condition to check the P is null
    if T.isExternal(p) then 
        return 0
    leftSum := sumHelper(T, T.leftChild(p)) 
    rightSum .:= sumHelper(T, T.rightChild(p)) 
    return leftSum + rightSum + p.element()
// leftSum is the sum of Lchild, 
// rightSum is the sum of rchild, 
// p.element() is the parent value

*/

// Find Min Keys with Tail Recursion
/*

Input: Binary tree Tree , key: min key
Output: Array with less than or equal key

Algorithm FindSmallerKeys(Tree, key) // Tree: Tree, key: number
    smallerKeys: number[] = [];      //array 
    keyHelper(Tree, key, smallerKeys, Tree.root())
    return smallerKeys;

Algorithm keyHelper(Tree, key, smallerKeys, node)    
    if Tree.isExternal(node) then 
        return;

    if node.element <= key then 
        smallerKeys.push(node.element); 
        return;

    keyHelper(Tree, key, smallerKeys, Tree.leftChild(node)) 
    keyHelper(Tree, key, smallerKeys, Tree.rightChild(node)) 
    
*/
