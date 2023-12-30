import { isSame, sameFrequency } from "./sameFrequency";

// console.log("App Running");

console.log("Is Same?");
isSame(182, 281); // true
isSame(34, 14); // false
isSame(3589578, 5879385); // true
isSame(22, 222); // false

console.log("Same Frequency");
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
