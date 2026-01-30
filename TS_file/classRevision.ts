export function singleLinkedList() {
  console.log("singleLinked list Conneected");
}

/**
// ########################################################################################################
// Creating Objects from class
// Class
 */
export class Student {
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
  averageScore() {
    const sum = this.#scores.reduce((total, curr) => total + curr, 0);
    console.log("Total", sum);
    return sum / this.#scores.length;
  }
}

// Static Method
export class Point {
  constructor(private x: number, private y: number) {}

  static distance(a: Point, b: Point) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }

  static calculatePoints() {
    return "Calculating Points";
  }
}

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
