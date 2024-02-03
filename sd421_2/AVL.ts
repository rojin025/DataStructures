/*
// Find Value
Algorithm findValue(key, value)
    if T.isExternal(value)
        return NO_SUCH_KEY

    if key = value.key()   
        return value.value()
        
    else if key < key(value)        
        return findValue(key, T.leftChild(value))
    
    else 
        key > value.key()        
        return findValue(key, T.rightChild(value))

Algorithm rotateLeft(Tree, Node)
    Input Binary Tree : Tree and Node
    Output a left rotation around Node is performed

    if Tree.isRoot(Node) throw InvalidLeftRotation 
    parent = Tree.parent(Node);
    grandParent = Tree.parent(parent);

    Tree.setRightChild(parent, Tree.leftChild(Node))
    if Tree.isInternal(Tree.leftChild(Node))
        Tree.setParent(Tree.leftChild(Node), parent)

    Tree.setLeftChild(Node, parent)    
    Tree.setParent(parent, Node)

    if Tree.isRoot(parent)
        Tree.setRoot(Node)
    else 
        if Tree.rightChild(grandParent) = parent
            Tree.setRightChild(grandParent, Node)        
        else
            Tree.setLeftChild(grandParent, Node)    
        Tree.setParent(Node, GrandParent)