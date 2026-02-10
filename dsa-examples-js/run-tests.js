#!/usr/bin/env node
/**
 * Regression tests for selected DSA examples. Run: node dsa-examples-js/run-tests.js (from repo root).
 * Covers 18, 22, 23; add more by exporting the main function from an example and adding assertions here.
 */
const assert = require("assert");

let failed = 0;

function run(name, fn) {
  try {
    fn();
    console.log("  OK " + name);
  } catch (e) {
    console.error("  FAIL " + name + ": " + e.message);
    failed++;
  }
}

// 18 — Longest Substring Without Repeating Characters
const { lengthOfLongestSubstring } = require("./18-longestSubstringNoRepeat.js");
run("18 lengthOfLongestSubstring('abcabcbb') === 3", () => {
  assert.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
});
run("18 lengthOfLongestSubstring('bbbbb') === 1", () => {
  assert.strictEqual(lengthOfLongestSubstring("bbbbb"), 1);
});
run("18 lengthOfLongestSubstring('pwwkew') === 3", () => {
  assert.strictEqual(lengthOfLongestSubstring("pwwkew"), 3);
});

// 22 — Merge Intervals
const { mergeIntervals } = require("./22-mergeIntervals.js");
run("22 mergeIntervals (overlapping)", () => {
  const result = mergeIntervals([
    { start: 1, end: 3 },
    { start: 2, end: 6 },
    { start: 8, end: 10 },
  ]);
  assert.strictEqual(result.length, 2);
  assert.strictEqual(result[0].start, 1);
  assert.strictEqual(result[0].end, 6);
  assert.strictEqual(result[1].start, 8);
  assert.strictEqual(result[1].end, 10);
});
run("22 mergeIntervals (adjacent)", () => {
  const result = mergeIntervals([{ start: 1, end: 4 }, { start: 4, end: 5 }]);
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].start, 1);
  assert.strictEqual(result[0].end, 5);
});

// 23 — Maximum Subarray Sum (Kadane)
const { maxSubarraySum } = require("./23-maxSubarrayKadane.js");
run("23 maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]) === 6", () => {
  assert.strictEqual(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});
run("23 maxSubarraySum([1]) === 1", () => {
  assert.strictEqual(maxSubarraySum([1]), 1);
});
run("23 maxSubarraySum([5,4,-1,7,8]) === 23", () => {
  assert.strictEqual(maxSubarraySum([5, 4, -1, 7, 8]), 23);
});

console.log("\n" + (failed === 0 ? "All tests passed." : failed + " test(s) failed."));
process.exit(failed > 0 ? 1 : 0);
