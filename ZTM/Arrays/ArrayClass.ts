type myData = {
  [index: number]: string;
};

class MyArray {
  length: number;
  data: myData;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item: string) {
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

  delete(index: number) {
    const deletedItem = this.data[index];
    this.shiftItemLeft(index);
    return deletedItem;
  }

  shiftItemLeft(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
console.log(newArray.get(0));

console.log("Hello");
console.log("World.");
