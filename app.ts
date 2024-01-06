import { isSame, sameFrequency } from "./sameFrequency";
import {
  wakeUp,
  countDown,
  factorial,
  collectOddNum,
  collectEvenNum,
} from "./recursion";
import { Point, singleLinkedList, Student } from "./classRevision";
import { SingleLinkedList } from "./singleLinkedList";
import { NodeDLL, DoubleLinkedList } from "./DoubleLinkedList";

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
/** Recursion */

// wakeUp();
// countDown(3);
// countDown(10);

// console.log(factorial(3));
// console.log(factorial(-3));

// console.log(collectOddNum([1, 2, 3, 4, 5, 6]));
// console.log(collectEvenNum([1, 2, 3, 4, 5, 6]));

/** Single Linked List */
// ##########################################################################################
// singleLinkedList();

/**
// ########################################################################################################
// Class Revision
 */
// // instanciation
// const ram = new Student("Ram", "Baral", 2);
// const shyam = new Student("Shyam", "Gurung", 3);

// console.log(ram);
// console.log(ram.addScore(80));
// console.log(ram.addScore(90));
// console.log(ram.addScore(100));
// console.log(ram.averageScore());
// console.log(ram.markLate());
// console.log(ram.markLate());
// console.log(shyam.fullName());

/**
// ########################################################################################################
// Static implementation
 */
// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// console.log(Point.distance(p1, p2));
// console.log(Point.calculatePoints());

/**
// ########################################################################################################
// Single Linked list
 */
// const list = new SingleLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// // console.log(list);
// // console.log("Get --> ", list.get(0));
// // console.log("Get --> ", list.get(1));
// // console.log("Get --> ", list.get(2));
// // console.log("Get --> ", list.get(-20));
// // console.log("Set --> ", list.set(-12, 4));
// // console.log("Set --> ", list.set(2, 4));
// // console.log("Remove --> ", list.remove(1));
// // console.log(list);
// list.print();
// list.reverse();
// list.print();

/**
// ########################################################################################################
// Double Linked list
 */

// // Checking NodeDLL
// let first = new NodeDLL(1);
// let second = new NodeDLL(2);

// first.next = second;
// second.prev = first;

// console.log(first);
// console.log(second);

let list = new DoubleLinkedList();

list.push(10);
list.push(20);
list.push(30);
console.log(list);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(list.pop());
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(list.pop());
console.log("++++++++++++++++++");
console.log(list);
