/**
 * Same Frequency — two numbers have same digit frequencies?
 * O(n) with frequency objects.
 */
function getFreq(num) {
  const s = String(Math.abs(num));
  const f = {};
  for (const d of s) f[d] = (f[d] || 0) + 1;
  return f;
}
function sameFrequency(a, b) {
  const fa = getFreq(a), fb = getFreq(b);
  if (Object.keys(fa).length !== Object.keys(fb).length) return false;
  for (const k in fa) if (fa[k] !== fb[k]) return false;
  return true;
}

console.log(sameFrequency(182, 281));   // true
console.log(sameFrequency(34, 14));    // false
