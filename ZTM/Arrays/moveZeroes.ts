console.log("Running");

/**
Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 1;

  if (nums.length === 0) return;

  while (right < nums.length) {
    if (nums[right] !== 0 && nums[left] === 0) {
      nums[left] = nums[right];
      nums[right] = 0;
    }
    if (nums[left] !== 0) {
      left++;
    }
    right++;
  }
  console.log(nums);
}

// [0,1,0,3,12]
// [1,0,0,3,12]
// [1,3,0,0,12]
// [1,3,12,0,0]

moveZeroes([1, 0, 1]);
moveZeroes([2, 1]);
moveZeroes([0, 1, 0, 3, 12]);

/**
 * 
 * Good Solution
  for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            numZeros++
        } else if (numZeros > 0) {
            // Shift
            nums[i - numZeros] = nums[i];
        }
    }
 */
