/**
 * Sequence ADT — remove duplicates, is permutation.
 */
function removeDuplicate(arr) {
  const seen = new Set();
  return arr.filter(x => {
    if (seen.has(x)) return false;
    seen.add(x);
    return true;
  });
}
function isPermutation(a, b) {
  if (a.length !== b.length) return false;
  const fa = {};
  for (const c of a) fa[c] = (fa[c] || 0) + 1;
  for (const c of b) {
    if (!fa[c]) return false;
    fa[c]--;
  }
  return true;
}

console.log(removeDuplicate([2, 5, 6, 2, 4, 3, 1, 3]));
console.log(isPermutation("ABC", "CBA"));  // true
console.log(isPermutation("AB", "CBA"));   // false
