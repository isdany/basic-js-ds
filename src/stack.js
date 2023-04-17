const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.arr = [];
  }
  push(element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.push(element);
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let len = this.arr.length;

    if (len > 0) {
      let el = (this.arr[len - 1]);
      this.arr.splice(len - 1, 1);
      return el;
    } return null;
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let len = this.arr.length;

    if (len > 0) return (this.arr[len - 1]);
  }
  }

module.exports = {
  Stack
};
