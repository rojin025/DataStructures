export function singleLinkedList() {
  console.log("singleLinked list Conneected");
}

/**
// ########################################################################################################
// Creating Objects from class
// Class
 */
class Student {
  grade: number;
  #tardies: number = 0;
  #scores: number[] = [];
  constructor(
    private firstName: string,
    private lastname: string,
    year: number
  ) {
    this.grade = year;
  }
  fullName() {
    return `Name: ${this.firstName} ${this.lastname}`;
  }
  markLate() {
    this.#tardies += 1;
    if (this.#tardies >= 3) return "You are Expelled!";
    return `${this.firstName} is late ${this.#tardies}`;
  }
  addScore(score: number) {
    this.#scores.push(score);
    return this.#scores;
  }
}

// instanciation
const ram = new Student("Ram", "Baral", 2);
const shyam = new Student("Shyam", "Gurung", 3);

console.log(ram);
console.log(ram.addScore(80));
console.log(ram.addScore(90));
// console.log(ram.markLate());
// console.log(ram.markLate());
// console.log(shyam.fullName());

/**
// ########################################################################################################
// 
// 
 */
// piece of data - val
//reference to next node - next

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {}
// }

// // var first = new Node("Hi")
// // first.next = new Node("there")
// // first.next.next = new Node("how")
// // first.next.next.next = new Node("are")
// // first.next.next.next.next = new Node("you")

// var list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("GOODBYE");
