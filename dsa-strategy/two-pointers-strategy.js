/**
 * TWO POINTERS STRATEGY — When & how to use (JS)
 * -----------------------------------------------
 * When to use: Sorted arrays (pair with target), palindromes, in-place dupes, linked list cycle/middle.
 * Idea: Two indices — start/end (left/right) or slow/fast; move according to the problem. Often O(n).
 *
 * See: ../dsa-cheatsheet-js/arrays-cheatsheet.js, ../dsa-examples-js/20-stringReversal.js,
 *      ../dsa-examples-js/27-mergeTwoSortedLists.js
 */

// --- 1. Two Sum on SORTED array (left/right) — return [index1, index2] (1-based) or values ---
// ✅ Sorted → if sum too small, move left++; too big → right--
function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [];
}

// --- 2. Valid palindrome (left/right), ignore non-alphanumeric ---
function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}

// --- 3. Remove duplicates in-place (slow/fast): sorted array, keep unique, return new length ---
// ✅ slow = write index, fast = read index
function removeDuplicatesInPlace(nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

// --- 4. Linked list: find middle node (slow/fast) ---
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// --- 5. Container with most water (left/right, move the shorter side) ---
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let best = 0;
  while (left < right) {
    const w = right - left;
    const h = Math.min(height[left], height[right]);
    best = Math.max(best, w * h);
    if (height[left] <= height[right]) left++;
    else right--;
  }
  return best;
}

// --- Run examples ---
console.log("--- Two Pointers strategy (practice) ---\n");

console.log("1. Two Sum (sorted) [1,2,4,6,8], 10:", twoSumSorted([1, 2, 4, 6, 8], 10));

console.log("2. Is palindrome 'A man, a plan, a canal: Panama':", isPalindrome("A man, a plan, a canal: Panama"));
console.log("   Is palindrome 'race a car':", isPalindrome("race a car"));

const dupes = [1, 1, 2, 2, 3, 4, 4, 4, 5];
const len = removeDuplicatesInPlace(dupes);
console.log("3. Remove dupes in-place, new length:", len, "| array (unique prefix):", dupes.slice(0, len));

const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("4. Middle of 1->2->3->4->5:", middleNode(list).val);

console.log("5. Max area [1,8,6,2,5,4,8,3,7]:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

module.exports = {
  twoSumSorted,
  isPalindrome,
  removeDuplicatesInPlace,
  ListNode,
  middleNode,
  maxArea,
};
