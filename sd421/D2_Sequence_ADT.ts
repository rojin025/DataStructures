/**
 * [ 2, 5, 6, 2, 4, 3, 1, 3] -> [ 2, 5, 6, 4, 3, 1 ]
 * O(n^2)
 */
export function removeDuplicate(array: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) result.push(array[i]);
  }
  return result;
}

/**
 *  Updated Code
 *  O(n)
 */
export function remDupe<T>(arr: T[]): T[] {
  let resultSet = new Set<T>();
  let result: T[] = [];
  for (const num of arr) {
    if (!resultSet.has(num)) {
      resultSet.add(num);
      result.push(num);
    }
  }

  return result;
}

// // Remove Duplicate
// console.log(removeDuplicate([2, 5, 6, 2, 4, 3, 1, 3]));
// console.log(remDupe([2, 5, 6, 2, 4, 3, 1, 3]));
// console.log(removeDuplicate([1, 2, 2, 2, 3, 4, 3, 5]));
// console.log(remDupe([1, 2, 2, 2, 3, 4, 3, 5]));

/**
 * 2.
 *  isPermutation(A,B)
 *  that takes two sequences A and B
 *  and determines whether or not they are permutations of each other
 * , i.e., same elements but possibly occurring in a different order.
 * Hint: assume that A and B do not contain duplicates
 *  (later we will allow duplicates).
 */

export function isPermutation(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[str2.length - 1 - i]) return false;
  }

  return true;
}
// console.log(isPermutation("ABC", "CBA")); // True
// console.log(isPermutation("ABC", "BCA")); // False
// console.log(isPermutation("AB", "CBA")); // False
