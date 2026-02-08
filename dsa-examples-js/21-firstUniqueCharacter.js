/**
 * First Unique Character — index of the first character that appears exactly once.
 * Two-pass: build frequency map, then find first char with count 1.
 * O(n) time, O(k) space (k = distinct characters).
 */

function firstUniqChar(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}

console.log(firstUniqChar('leetcode'));   // 0 ('l')
console.log(firstUniqChar('loveleetcode')); // 2 ('v')
console.log(firstUniqChar('aabb'));      // -1
console.log(firstUniqChar('z'));         // 0
