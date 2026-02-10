/**
 * Two Sum — given array and target, return indices of two numbers that add up to target.
 * Hash map: value → index; one pass. O(n) time, O(n) space.
 */

function twoSum(nums, target) {
  const seen = new Map(); // value → index
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));   // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));           // [0, 1]
