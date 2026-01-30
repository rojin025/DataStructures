/**
 * Binary Search Tree — insert, find, BFS, DFS (pre/in/post order).
 */
class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const n = new BSTNode(val);
    if (!this.root) {
      this.root = n;
      return this;
    }
    let cur = this.root;
    while (true) {
      if (val === cur.val) return this;
      if (val < cur.val) {
        if (!cur.left) {
          cur.left = n;
          return this;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = n;
          return this;
        }
        cur = cur.right;
      }
    }
  }
  find(val) {
    let cur = this.root;
    while (cur) {
      if (val === cur.val) return cur;
      cur = val < cur.val ? cur.left : cur.right;
    }
    return null;
  }
  BFS() {
    const out = [],
      q = this.root ? [this.root] : [];
    while (q.length) {
      const n = q.shift();
      out.push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    return out;
  }
  DFSPreOrder() {
    const out = [];
    function go(n) {
      if (!n) return;
      out.push(n.val);
      go(n.left);
      go(n.right);
    }
    go(this.root);
    return out;
  }
  DFSInOrder() {
    const out = [];
    function go(n) {
      if (!n) return;
      go(n.left);
      out.push(n.val);
      go(n.right);
    }
    go(this.root);
    return out;
  }
}

const bst = new BinarySearchTree();
[10, 5, 13, 2, 7, 11, 16].forEach((v) => bst.insert(v));
console.log("BFS:", bst.BFS());
console.log("PreOrder:", bst.DFSPreOrder());
console.log("InOrder:", bst.DFSInOrder());
console.log("find(7):", bst.find(7)?.val);
