const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.list = null;
    this.length = 0;
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.list;
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.length === 0) {
      this.list = new ListNode(value);
    } else {
      let pointer = this.list;

      while (!(pointer.next === null)) {
        pointer = pointer.next;
      }

      pointer.next = new ListNode(value);
    }

    this.length++;
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.length > 0) {
      let el = this.list;
      this.list = el.next;
      this.length--;

      return el.value;
    } return null;
}
  }

module.exports = {
  Queue
};
