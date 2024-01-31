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

