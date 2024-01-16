/**

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
[Note: if you return [0,0] is wrong answer, may not use the same element twice]
What is the time complexity of your solution. 
 */

// O(n^2) -> I will refactor
export function addUp(arr: number[], totalSum: number): number[] {
  let currentNum: number, otherNum: number;
  for (let i = 0; i < arr.length; i++) {
    currentNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      otherNum = arr[j];
      if (currentNum + otherNum === totalSum) {
        return [i, j];
      }
    }
  }
  return [];
}

// function addUp2(arr: number[], totalSum: number): number[] {
//   const differnce = totalSum - arr[i];
//   const index = arr.findIndex((num) => num === differnce);
//   if (index !== i) {
//     console.log("-->", index);
//     return [i, index];
//   }

//   return [];
// }

console.log("Extra Question");
console.log(addUp([2, 7, 11, 15], 9));
console.log(addUp([3, 2, 4], 6));
console.log(addUp([3, 3], 6));

//  [ 0, 1 ]
// [ 1, 2 ]
// [ 0, 1 ]
