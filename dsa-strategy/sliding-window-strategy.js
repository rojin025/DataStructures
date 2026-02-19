/**
 * SLIDING WINDOW STRATEGY — When & how to use (JS)
 * -------------------------------------------------
 * When to use: Contiguous subarray/substring with a constraint (max sum of K, longest with at most K distinct,
 *              min size with sum >= target, longest no repeats). Idea: Expand right, shrink left when invalid.
 *              O(n) time. Fixed window = constant size; variable = grow/shrink.
 *
 * See: ../dsa-cheatsheet-js/array-methods-reference.js, ../dsa-examples-js/18-longestSubstringNoRepeat.js,
 *      Documents/dsa-cheatsheet-js/Arrays.md
 */

// --- 1. Fixed window: max sum of K consecutive elements ---
// ✅ Window size = K; slide by one each time (add right, drop left)
function maxSumKConsecutive(nums, k) {
  if (nums.length < k) return null;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  let max = sum;
  for (let right = k; right < nums.length; right++) {
    sum += nums[right] - nums[right - k];
    max = Math.max(max, sum);
  }
  return max;
}

// --- 2. Variable window: longest substring without repeating characters ---
// ✅ Expand right, add to Set; when s[right] already in Set, shrink left and remove s[left] until valid
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

// --- 3. Variable window: minimum length subarray with sum >= target ---
// ✅ Expand right; when sum >= target, shrink left while still >= target, track min length
function minSubarrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// --- 4. Variable window: longest substring with at most K distinct characters ---
// ✅ Expand right, count chars in Map; when Map size > K, shrink left and decrement/remove until size <= K
function longestSubstringKDistinct(s, k) {
  if (k === 0) return 0;
  const count = new Map();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    count.set(c, (count.get(c) ?? 0) + 1);
    while (count.size > k) {
      const d = s[left];
      count.set(d, count.get(d) - 1);
      if (count.get(d) === 0) count.delete(d);
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}

// --- Run examples ---
console.log("--- Sliding Window strategy (practice) ---\n");

console.log("1. Max sum of 3 consecutive [2,1,5,1,3,2]:", maxSumKConsecutive([2, 1, 5, 1, 3, 2], 3));

console.log("2. Longest substring no repeat 'abcabcbb':", lengthOfLongestSubstring("abcabcbb"));
console.log("   Longest substring no repeat 'pwwkew':", lengthOfLongestSubstring("pwwkew"));

console.log("3. Min subarray length sum >= 7, [2,3,1,2,4,3]:", minSubarrayLen(7, [2, 3, 1, 2, 4, 3]));

console.log("4. Longest substring with at most 2 distinct 'eceba':", longestSubstringKDistinct("eceba", 2));

module.exports = {
  maxSumKConsecutive,
  lengthOfLongestSubstring,
  minSubarrayLen,
  longestSubstringKDistinct,
};
