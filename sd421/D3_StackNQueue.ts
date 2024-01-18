// Abstract Class: Stack
//     Properties:
//         - items: a list to store stack elements

//     Method: push(item)
//         Add the item to the top of the stack

//     Method: pop()
//         Remove and return the item from the top of the stack
//         If the stack is empty, return None

//     Method: isEmpty()
//         Return true if the stack is empty, else false

//     Method: top()
//         Return None if the stack is empty, else return the item from the top of the stack

// Function: isExpressionValid(expression)
//     Create an instance of Stack
//     For each character in the expression:
//         If the character is an opening parenthesis '(', '[', or '{':
//             Push the character onto the stack
//         If the character is a closing parenthesis ')', ']', or '}':
//             If the stack is empty, return False
//             Pop the top element from the stack
//             If the popped element does not match the corresponding opening parenthesis, return False
//     After processing all characters, if the stack is empty, return True; otherwise, return False
