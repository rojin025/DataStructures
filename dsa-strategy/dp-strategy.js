/**
 * DYNAMIC PROGRAMMING STRATEGY — When & how to use (JS)
 * -----------------------------------------------------
 * When to use: Overlapping subproblems + optimal substructure — max subarray, climb stairs, coin change, LCS, unique paths.
 * Idea: Define subproblem → recurrence → base case → memoize or build table (top-down or bottom-up).
 *
 * See: ../dsa-cheatsheet-js/dynamic-programming-cheatsheet.js
 */

// --- 1. Kadane — max sum of contiguous subarray ---
// ✅ dp[i] = max(nums[i], dp[i-1] + nums[i]); can use one variable for space O(1)
function maxSubarraySum(nums) {
  if (nums.length === 0) return 0;
  let best = nums[0];
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    best = Math.max(best, cur);
  }
  return best;
}

// --- 2. Climb stairs — ways to reach top (1 or 2 steps at a time) ---
// ✅ dp[i] = dp[i-1] + dp[i-2]; base dp[0]=1, dp[1]=1; can roll to two vars
function climbStairs(n) {
  if (n <= 1) return 1;
  let prev = 1;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

// --- 3. Coin change — min number of coins to make amount (or -1) ---
// ✅ dp[a] = 1 + min(dp[a - c]) over coins c; dp[0]=0; fill rest with Infinity
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let a = 1; a <= amount; a++) {
    for (const c of coins) {
      if (a >= c) dp[a] = Math.min(dp[a], 1 + dp[a - c]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// --- 4. House robber — max sum of non-adjacent elements (1D DP) ---
// ✅ dp[i] = max(dp[i-1], nums[i] + dp[i-2]); roll to prev2, prev1
function houseRobber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let prev2 = nums[0];
  let prev1 = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const cur = Math.max(prev1, nums[i] + prev2);
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1;
}

// --- 5. Unique paths — grid (m×n), from top-left to bottom-right, only right/down ---
// ✅ dp[i][j] = dp[i-1][j] + dp[i][j-1]; first row/col = 1
function uniquePaths(m, n) {
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

// --- 6. Longest common subsequence (LCS) — length only, 2D DP ---
// ✅ dp[i][j] = s1[i]===s2[j] ? 1+dp[i-1][j-1] : max(dp[i-1][j], dp[i][j-1]); pad with 0
function longestCommonSubsequence(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  const dp = Array(len1 + 1)
    .fill(0)
    .map(() => Array(len2 + 1).fill(0));
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[len1][len2];
}

// --- 7. Fibonacci with memo (top-down) — classic memoization pattern ---
// ✅ Cache by n; recurse only when not in cache
function fibMemo() {
  const cache = {};
  return function fib(n) {
    if (n in cache) return cache[n];
    if (n < 2) return n;
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

// --- Run examples ---
console.log("--- DP strategy (practice) ---\n");

console.log("1. maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]):", maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log("   maxSubarraySum([1]):", maxSubarraySum([1]));

console.log("2. climbStairs(1):", climbStairs(1));
console.log("   climbStairs(4):", climbStairs(4));

console.log("3. coinChange([1,2,5], 11):", coinChange([1, 2, 5], 11));
console.log("   coinChange([2], 3):", coinChange([2], 3));

console.log("4. houseRobber([2,7,9,3,1]):", houseRobber([2, 7, 9, 3, 1]));
console.log("   houseRobber([1,2,3,1]):", houseRobber([1, 2, 3, 1]));

console.log("5. uniquePaths(3, 7):", uniquePaths(3, 7));

console.log("6. longestCommonSubsequence('abcde', 'ace'):", longestCommonSubsequence("abcde", "ace"));
console.log("   longestCommonSubsequence('abc', 'abc'):", longestCommonSubsequence("abc", "abc"));

const fib = fibMemo();
console.log("7. fib(10):", fib(10));

module.exports = {
  maxSubarraySum,
  climbStairs,
  coinChange,
  houseRobber,
  uniquePaths,
  longestCommonSubsequence,
  fibMemo,
};
