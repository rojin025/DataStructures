/**
 * Complex String Compression — compress consecutive chars to char+count.
 * "aabcccccaaa" → "a2b1c5a3". Single pass, O(1) extra space (excluding output).
 */
function compressString(s) {
  if (!s.length) return '';
  let result = '';
  let count = 1;
  for (let i = 1; i <= s.length; i++) {
    if (i < s.length && s[i] === s[i - 1]) {
      count++;
    } else {
      result += s[i - 1] + count;
      count = 1;
    }
  }
  return result;
}

console.log(compressString('aabcccccaaa')); // "a2b1c5a3"
console.log(compressString('abc'));         // "a1b1c1"
console.log(compressString(''));            // ""
