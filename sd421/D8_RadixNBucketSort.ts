/*
// O(n). Both loops are executed sequentially, and there are no nested loops or recursive calls. 
Algorithm: FindFirstUniqueNumber 
Input: arr (an array of number)

Create an empty Object frequencyCount
    { [key: number]: number } = {};

//  Traverse the input  (arr ) and update frequencyCount
Procedure UpdateFrequency(arr, frequencyCount):
    For each element num in arr
        If num is in frequencyCount:
            Increment frequencyCount[num] + 1
        Else
            Set frequencyCount[num] to 1

    For each element num in arr:
        If frequencyCount[num] is equal to 1:
            Return num  // Found

Return -1;  // If not found
*/

function firstUniqueInteger(arr: number[]): number {
  // Step 1: Initialize hash table
  const frequencyTable: { [key: number]: number } = {};

  // Step 2-3: Traverse the input array and update frequency
  for (const num of arr) {
    if (num in frequencyTable) {
      frequencyTable[num]++;
    } else {
      frequencyTable[num] = 1;
    }
  }

  // Step 4-6: Find the first integer with frequency 1
  for (const num of arr) {
    if (frequencyTable[num] === 1) {
      return num;
    }
  }

  // Default return (should not reach here based on the problem statement)
  return -1;
}

// Example usage
const inputArray: number[] = [1, 2, 4, 9, 3, 2, 1, 4, 5];
const result: number = firstUniqueInteger(inputArray);
console.log(result); // Output: 9
