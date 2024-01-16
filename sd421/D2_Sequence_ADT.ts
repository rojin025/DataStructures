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
