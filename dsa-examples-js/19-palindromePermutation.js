/**
 * Palindrome Permutation Detector — can the string be rearranged into a palindrome?
 * A string is a permutation of a palindrome iff at most one character has odd frequency.
 * O(n) time, O(k) space (k = number of distinct characters).
 */
function canPermuteToPalindrome(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  let oddCount = 0;
  for (const count of Object.values(freq)) {
    if (count % 2 === 1) oddCount++;
  }
  return oddCount <= 1;
}

console.log(canPermuteToPalindrome('tactcoa'));   // true ("taco cat", "atco cta", ...)
console.log(canPermuteToPalindrome('code'));      // false
console.log(canPermuteToPalindrome('aab'));       // true ("aba")
console.log(canPermuteToPalindrome('carerac'));   // true ("racecar")
