const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    return people;
  },

  enqueue(person) {
    people.enqueue(person);
    return people;
  },

  dequeue() {
    people.dequeue();
  }
};
