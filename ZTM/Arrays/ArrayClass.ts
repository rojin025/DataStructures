import { ClientRequest } from "http";

class MyArray {
  length: number;
  data;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item: number) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const newArray = new MyArray();
console.log(newArray.get(0));

console.log("Hello");
console.log("World.");
