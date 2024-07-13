/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let updatedNums: number[] = [];
  let countZeroes = 0;

  if (nums.length === 0) return;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      countZeroes++;
    } else {
      updatedNums.push(nums[i]);
    }
  }

  for (let i = 0; i < countZeroes; i++) {
    updatedNums.push(0);
  }

  nums = [...updatedNums];
}
