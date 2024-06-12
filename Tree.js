const Node = require("./Node.js");

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array) {
    let sortedArray = this.removeDuplicates(array).sort((a, b) => a - b);
    this.root = this.buildTreeHelper(sortedArray, 0, sortedArray.length - 1);
    return this.root;
  }

  buildTreeHelper(array, start, end) {
    if (start > end) {
      return null;
    }

    let middle = Math.floor((start + end) / 2);
    const node = new Node(array[middle]);

    node.left = this.buildTreeHelper(array, start, middle - 1);
    node.right = this.buildTreeHelper(array, middle + 1, end);

    return node;
  }

  removeDuplicates(array) {
    let unique = [];
    array.forEach((a) => {
      if (!unique.includes(a)) {
        unique.push(a);
      }
    });
    return unique;
  }
}

module.exports = Tree;
