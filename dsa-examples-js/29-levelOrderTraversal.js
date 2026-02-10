/**
 * Level Order Traversal (BFS) — return tree values level by level as array of arrays.
 * Queue: enqueue node, then left, then right. O(n) time, O(n) space.
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}

// Tree:      3
//          /   \
//         9    20
//             /  \
//            15   7
const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(levelOrder(root)); // [[3], [9, 20], [15, 7]]
