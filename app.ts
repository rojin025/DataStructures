import { isSame, sameFrequency } from "./sameFrequency";
import { wakeUp, countDown, factorial, collectOddNum } from "./recursion";

// console.log("App Running");

// ##########################################################################################
/**
O(n)
  what is better?
  - Faster?
  - Less memory?
  - More readable?

 */

// console.log("Is Same?");
// isSame(182, 281); // true
// isSame(34, 14); // false
// isSame(3589578, 5879385); // true
// isSame(22, 222); // false

// console.log("Same Frequency");
// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

// ##########################################################################################
// Recursion

// wakeUp();
// countDown(3);
// countDown(10);

// console.log(factorial(3));
// console.log(factorial(-3));

console.log(collectOddNum([1, 2, 3, 4, 5, 6]));
