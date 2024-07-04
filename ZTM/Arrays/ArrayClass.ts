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
}

const newArray = new MyArray();
console.log(newArray.get(0));
