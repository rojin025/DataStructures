class NodeBST {
  value: number;
  left: null | NodeBST;
  right: null | NodeBST;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySerachTree {
  root: null | NodeBST;
  constructor() {
    this.root = null;
  }

  insert(value: number): BinarySerachTree | boolean {
    let newNode = new NodeBST(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return false;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(target: number): boolean {
    if (!this.root) return false;
    let current = this.root;

    while (true) {
      if (current.value === target) return true;
      if (target < current.value) {
        if (current.left) {
          current = current.left;
        } else return false;
      } else {
        if (current.right) {
          current = current.right;
        } else return false;
      }
    }
  }

  findNode(target: number): NodeBST | boolean {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (current.value === target) return current;
      else if (current.value > target) {
        if (current.left) {
          current = current.left;
        } else return false;
      } else {
        if (current.right) {
          current = current.right;
        } else return false;
      }
    }
    return found;
  }
}
