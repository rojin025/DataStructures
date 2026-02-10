/**
 * Longest Substring Without Repeating Characters — length of longest substring
 * with all distinct characters. Sliding window + Set; O(n) time, O(min(n, charset)) space.
 *
 * ITERATION WALKTHROUGH (s = "abcabcbb"):
 *   left=0, right=0: add 'a' → set={a},   window="a",   len=1, max=1
 *   left=0, right=1: add 'b' → set={a,b}, window="ab",  len=2, max=2
 *   left=0, right=2: add 'c' → set={a,b,c}, window="abc", len=3, max=3
 *   left=0, right=3: 'a' in set → delete s[0]='a', left=1; then add 'a' → set={b,c,a}, window="bca", len=3, max=3
 *   left=1, right=4: 'b' in set → delete s[1]='b', left=2; then add 'b' → set={c,a,b}, window="cab", len=3, max=3
 *   left=2, right=5: 'c' in set → delete s[2]='c', left=3; then add 'c' → set={a,b,c}, window="abc", len=3, max=3
 *   left=3, right=6: 'b' in set → delete s[3]='a', left=4; still has 'b' → delete s[4]='b', left=5; add 'b' → set={c,b}, window="cb", len=2, max=3
 *   left=5, right=7: 'b' in set → delete s[5]='b', left=6; add 'b' → set={b}, window="b", len=1, max=3
 *   return 3
 */
function lengthOfLongestSubstring(s) {
  const set = new Set();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3 ("abc")
console.log(lengthOfLongestSubstring('bbbbb'));    // 1 ("b")
console.log(lengthOfLongestSubstring('pwwkew'));  // 3 ("wke")

module.exports = { lengthOfLongestSubstring };
