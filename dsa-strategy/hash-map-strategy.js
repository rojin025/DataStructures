/**
 * HASH MAP / SET STRATEGY — When & how to use (JS)
 * ------------------------------------------------
 * When to use: O(1) lookup by value — two sum (unsorted), anagrams, first unique, contains duplicate, count/frequency.
 * Idea: Map for key→value (index, count, or list); Set for "seen" or deduplication. Average O(1) per operation.
 *
 * See: ../dsa-cheatsheet-js/hash-tables-cheatsheet.js, ../dsa-cheatsheet-js/sets-cheatsheet.js
 */

// --- 1. Two Sum (unsorted) — return [i, j] such that nums[i] + nums[j] === target ---
// ✅ Map: value → index; for each num, check if (target - num) was seen
function twoSum(nums, target) {
  const seen = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
  return [];
}

// --- 2. Group Anagrams — group strings that are anagrams of each other ---
// ✅ Map: normalized key (sorted string or count signature) → list of strings
function groupAnagrams(strs) {
  const groups = new Map();
  for (const s of strs) {
    const key = [...s].sort().join("");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s);
  }
  return [...groups.values()];
}

// --- 3. First unique character — index of first non-repeating char, or -1 ---
// ✅ Map: char → count; then scan string for first with count 1
function firstUniqChar(s) {
  const count = new Map();
  for (const c of s) count.set(c, (count.get(c) ?? 0) + 1);
  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i]) === 1) return i;
  }
  return -1;
}

// --- 4. Contains duplicate — true if any value appears at least twice ---
// ✅ Set: if we see an element already in set, return true
function containsDuplicate(nums) {
  const seen = new Set();
  for (const x of nums) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}

// --- 5. Valid anagram — s and t same chars (same frequency) ---
// ✅ Map: char → count for s; decrement for t; all counts must end at 0 (or use two count maps and compare)
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = new Map();
  for (const c of s) count.set(c, (count.get(c) ?? 0) + 1);
  for (const c of t) {
    const n = (count.get(c) ?? 0) - 1;
    if (n < 0) return false;
    count.set(c, n);
  }
  return true;
}

// --- 6. Intersection of two arrays — distinct elements that appear in both ---
// ✅ Set for one array; collect matches from the other
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const result = new Set();
  for (const x of nums2) {
    if (set1.has(x)) result.add(x);
  }
  return [...result];
}

// --- Run examples ---
console.log("--- Hash Map / Set strategy (practice) ---\n");

console.log("1. twoSum([2, 7, 11, 15], 9):", twoSum([2, 7, 11, 15], 9));
console.log("   twoSum([3, 2, 4], 6):", twoSum([3, 2, 4], 6));

console.log("2. groupAnagrams(['eat','tea','tan','ate','nat','bat']):", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log("3. firstUniqChar('leetcode'):", firstUniqChar("leetcode"));
console.log("   firstUniqChar('aabb'):", firstUniqChar("aabb"));

console.log("4. containsDuplicate([1,2,3,1]):", containsDuplicate([1, 2, 3, 1]));
console.log("   containsDuplicate([1,2,3,4]):", containsDuplicate([1, 2, 3, 4]));

console.log("5. isAnagram('anagram', 'nagaram'):", isAnagram("anagram", "nagaram"));
console.log("   isAnagram('rat', 'car'):", isAnagram("rat", "car"));

console.log("6. intersection([1,2,2,1], [2,2]):", intersection([1, 2, 2, 1], [2, 2]));
console.log("   intersection([4,9,5], [9,4,9,8,4]):", intersection([4, 9, 5], [9, 4, 9, 8, 4]));

module.exports = {
  twoSum,
  groupAnagrams,
  firstUniqChar,
  containsDuplicate,
  isAnagram,
  intersection,
};
