const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (this._root === null) {
      this._root = newNode;
      return;
    }

    let current = this._root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this._root;

    while (current !== null) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      }
      else {
        current = current.right
      }
    }
    return false;
  }

  find(data) {
    let current = this._root;

    while (current !== null){
      if (data === current.data) {
        return current;
      }
      if (data < current.data){
        current = current.left;
      }
      else current = current.right;
    }
    return null;
  }

  remove(data) {
    const findMin = (node) => node.left ? findMin(node.left) : node;

    const removeNode = (node, value) => {
      if (!node) return null;

      if (value < node.data) {
        node.left = removeNode(node.left, value);
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
      } else {
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        const temp = findMin(node.right);
        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
      }
      return node;
    };

    this._root = removeNode(this._root, data);
  }

  min() {
    if(!this._root) {
      return null;
    }

    let current = this._root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if(!this._root) {
      return null;
    }

    let current = this._root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
