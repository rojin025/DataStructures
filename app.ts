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
import { Stack } from "./stack";
import { Queue } from "./queue";

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

// let list = new DoubleLinkedList();

// list.push(10);
// list.push(20);
// list.push(30);
// list.push(40);
// list.push(50);
// console.log(list);

/** Pop */
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.pop());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.pop());
// console.log("++++++++++++++++++");
// console.log(list);

// // Shift
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.shift());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.shift());
// console.log("++++++++++++++++++");
// console.log(list);

// // Unshift
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.unshift(12));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.unshift(10));
// console.log("++++++++++++++++++");
// console.log(list);

/** Get  */
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.get(3));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.get(10));
// console.log("++++++++++++++++++");
// console.log(list);

// /** Set  */
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.set(13, 1));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.set(0, 1));
// console.log(list.set(4, 5));
// console.log("++++++++++++++++++");
// console.log(list);

/** Insert  */
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.insert(5, 60));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.insert(0, 1));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.insert(13, 1));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.insert(1, 20));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.insert(3, 35));
// console.log("++++++++++++++++++");
// console.log(list);

/** Remove  */
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.remove(13));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.remove(-13));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.remove(0));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.remove(2));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(list.remove(1));
// console.log("=========================================================");
// console.log(list);

// /** Stack  */
// /** push and Pop  */
// let stack = new Stack();
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(stack);
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(stack.push(3));
// console.log(stack.push(2));
// console.log(stack.push(1));
// console.log(stack);
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log("Poping ---> ", stack.pop());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log("Poping ---> ", stack.pop());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log("Poping ---> ", stack.pop());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

/** Queue  */
/** Array push and shift  */
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// let q: number[] = [];
// q.push(1);
// q.push(2);
// q.push(3);
// console.log("Queue", q);
// console.log("shift ->", q.shift());
// console.log("shift ->", q.shift());
// console.log("shift ->", q.shift());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

/** Array unshift and pop  */
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// let q: number[] = [];
// q.unshift(1);
// q.unshift(2);
// q.unshift(3);
// console.log("Queue", q);
// console.log("Pop ->", q.pop());
// console.log("Pop ->", q.pop());
// console.log("Pop ->", q.pop());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// /** SingleLinkedList Queue  */
// let queue = new Queue();

// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(queue.enqueue(1));
// console.log(queue.enqueue(2));
// console.log(queue.enqueue(3));
// console.log(queue);
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log("Dequeuing ---> ", queue.dequeue());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log("Dequeuing ---> ", queue.dequeue());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log("Dequeuing ---> ", queue.dequeue());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// // /** Binary Search Tree  */
// import { BinarySerachTree } from "./binarySearchTree";
// let bst = new BinarySerachTree();

// // console.log(bst);
// // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// bst.insert(10);
// bst.insert(5);
// bst.insert(13);
// bst.insert(11);
// bst.insert(2);
// bst.insert(16);
// bst.insert(7);
// // console.log(bst);

// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//        10
//    5       13
//  2   7   11  16

// console.log(bst.find(10));
// console.log(bst.find(5));
// console.log(bst.find(13));
// console.log(bst.find(11));
// console.log(bst.find(2));
// console.log(bst.find(16));
// console.log(bst.find(7));

// console.log(bst.find(1));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// console.log(bst.findNode(10));
// console.log(bst.findNode(5));
// console.log(bst.findNode(13));
// console.log(bst.findNode(11));
// console.log(bst.findNode(2));
// console.log(bst.findNode(16));
// console.log(bst.findNode(7));

// console.log(bst.findNode(1));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// // /** Breath First Search */
// console.log(bst.BFS());
// console.log(bst.DFSPreOrder());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(bst.DSFPostOrder());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(bst.DSFInOrder());

// /** Max Binary Heap */

import { MaxBinaryHeap } from "./maxBinaryHeap";
let mbh = new MaxBinaryHeap();

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
mbh.insert(10);
mbh.insert(5);
mbh.insert(13);
mbh.insert(11);
mbh.insert(2);
mbh.insert(16);
mbh.insert(7);
console.log(mbh);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//          16
//    11          13
//  5     2   10      7

// console.log(bst.BFS());
// console.log(bst.DFSPreOrder());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(bst.DSFPostOrder());
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(bst.DSFInOrder());
