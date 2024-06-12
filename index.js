const Tree = require("./Tree");

let binarySearchTree = new Tree();

binarySearchTree.buildTree([
  1, 7, 4, 23, 89, 4, 3, 5, 7, 9, 67, 6345, 324, 40, 2, 30, 4, 5, 99, 1000,
  2000,
]);

// Visualize the binary search tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(binarySearchTree.root, (prefix = ""), (isLeft = true));
