/**
 * Maximum Subarray Sum (Kadane's Algorithm)
 * Find the contiguous subarray with the largest sum. One pass, O(n) time, O(1) space.
 */

function maxSubarraySum(nums) {
  if (!nums.length) return null;

  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 (subarray [4, -1, 2, 1])
console.log(maxSubarraySum([1]));                               // 1
console.log(maxSubarraySum([5, 4, -1, 7, 8]));                  // 23 (whole array)
