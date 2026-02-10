/**
 * Valid Parentheses — check if string of ()[]{} is well-balanced.
 * Stack: push opening, pop and match on closing. O(n) time, O(n) space.
 */

function isValidParentheses(s) {
  const stack = [];
  const closeToOpen = { ')': '(', ']': '[', '}': '{' };
  for (const c of s) {
    if (closeToOpen[c]) {
      if (stack.pop() !== closeToOpen[c]) return false;
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}

console.log(isValidParentheses('()'));       // true
console.log(isValidParentheses('()[]{}'));  // true
console.log(isValidParentheses('(]'));      // false
console.log(isValidParentheses('([)]'));    // false
