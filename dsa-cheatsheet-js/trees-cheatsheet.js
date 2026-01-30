/**
 * TREES — DSA Cheatsheet (JS)
 * ---------------------------
 * Hierarchical: root, children, leaves. No cycle (acyclic). Binary = at most 2 children per node.
 *
 * BINARY SEARCH TREE (BST): left < node < right. Search/insert/delete: O(log n) if balanced,
 * O(n) if degenerate (like a linked list). Balancing: AVL, Red-Black.
 *
 * BINARY HEAP: Complete tree + heap property (min-heap: parent ≤ children; max-heap: parent ≥ children).
 * No order between siblings. Used for priority queue; top is min or max, O(log n) insert/remove.
 *
 * Traversals: In-order (left, node, right) → sorted order for BST. Pre-order (node first), post-order (node last).
 *
 * Use BST when: Sorted order + fast lookup/insert/delete. Use heap when: need max/min or priority queue.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// --- BST lookup (same idea for insert/delete) ---
function bstLookup(node, key) {
  if (!node || node.value === key) return node;
  if (key < node.value) return bstLookup(node.left, key);
  return bstLookup(node.right, key);
}

// --- DFS traversals (In-Order, Pre-Order, Post-Order) ---
// In-Order: left -> node -> right (sorted order for BST)
function inOrder(node, out = []) {
  if (!node) return out;
  inOrder(node.left, out);
  out.push(node.value);
  inOrder(node.right, out);
  return out;
}

// Pre-Order: node -> left -> right
function preOrder(node, out = []) {
  if (!node) return out;
  out.push(node.value);
  preOrder(node.left, out);
  preOrder(node.right, out);
  return out;
}

// Post-Order: left -> right -> node
function postOrder(node, out = []) {
  if (!node) return out;
  postOrder(node.left, out);
  postOrder(node.right, out);
  out.push(node.value);
  return out;
}

module.exports = { TreeNode, bstLookup, inOrder, preOrder, postOrder };
