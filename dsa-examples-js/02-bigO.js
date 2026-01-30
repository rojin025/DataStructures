/**
 * Big O — count even numbers O(n), simple examples.
 */
function countEvenNumIn(arr) {
  let count = 0;
  for (const n of arr) if (n % 2 === 0) count++;
  return count;
}
// O(1) — constant
function first(arr) {
  return arr[0];
}
// O(n) — linear
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
// O(n²) — nested loops
function pairs(arr) {
  const out = [];
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) out.push([arr[i], arr[j]]);
  return out;
}

console.log("countEvenNumIn([1,2,3,4]):", countEvenNumIn([1, 2, 3, 4]));
console.log("first([10,20,30]):", first([10, 20, 30]));
console.log("sum([1,2,3]):", sum([1, 2, 3]));
console.log("pairs([1,2,3]).length:", pairs([1, 2, 3]).length);
