/**
 * String Reversal — reverse a string without using .reverse().
 * Challenge: manual approaches only (loop or two-pointer).
 * O(n) time, O(n) space for the result.
 */

// ✅ Backward loop: build string from end to start
function reverseString(s) {
  let result = '';
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}

// ✅ Two-pointer: swap characters from both ends (using array, no .reverse())
function reverseStringTwoPointer(s) {
  const arr = [...s];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join('');
}

console.log(reverseString('Hello World'));           // dlroW olleH
console.log(reverseStringTwoPointer('Hello World')); // dlroW olleH
console.log(reverseString(''));                       // ''
console.log(reverseString('x'));                     // x
