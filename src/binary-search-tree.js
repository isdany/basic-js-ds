const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.tree = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.tree;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let curNode = this.tree;
    let newNode = new Node(data);

    if (!curNode) {
      this.tree = newNode;

    } else {

      while (curNode) {
        if (data > curNode.data) {
          if (curNode.right) {
            curNode = curNode.right;

          } else {

            curNode.right = newNode;
            break;
          }
        } else {
          if (curNode.left) {
            curNode = curNode.left;

          } else {

            curNode.left = newNode;
            break;
          }
        }
      }
    };
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return !!this.find(data);
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let curNode = this.tree;

    if (!curNode) {
      return null;

    } else {

      while (curNode) {
        if (data > curNode.data) {

          curNode = curNode.right;

        } else if (data < curNode.data) {

          curNode = curNode.left;

        } else return curNode; //data = curNode.data 
      }
    };
    return null;
  }

  remove(data, curNode = this.tree) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!curNode) return null;

    if (data > curNode.data) {
      curNode.right = this.remove(data, curNode.right);

    } else if (data < curNode.data) {
      curNode.left = this.remove(data, curNode.left);

    } else { //del

      if ((curNode.left) && (curNode.right)) { // both

        let min = this.min(curNode.right);
        curNode.data = min;
        curNode.right = this.remove(min, curNode.right);

      } else {
        if (curNode.left) { // only left child
          curNode = curNode.left

        } else if (curNode.right) { // only right child
          curNode = curNode.right

        } else { // no child
          curNode = null;
        }
      }
    }
    return curNode;

  }

  min(curNode = this.tree) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!curNode) {
      return null;

    } else {

      while (curNode) {
        if (curNode.left) {
          curNode = curNode.left;

        } else {
          return curNode.data;
        }
      }
    };
  }

  max(curNode = this.tree) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!curNode) {
      return null;

    } else {

      while (curNode) {
        if (curNode.right) {
          curNode = curNode.right;

        } else {
          return curNode.data;
        }
      }
    };
  }
  }

module.exports = {
  BinarySearchTree
};