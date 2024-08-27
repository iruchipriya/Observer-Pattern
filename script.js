console.log('Hello!');

class Subject {
  constructor() {
    this.observers = [];
  }

  // Subscribe: Add an observer to the list
  subscribe(observer) {
    this.observers.push(observer);
  }

  // Unsubscribe: Remove an observer from the list
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Notify: Call update on all observers
  notify(message) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  // Method called by the subject to notify the observer
  update(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Create a subject
const subject = new Subject();

// Create observers
const observer1 = new Observer('Observer1');
const observer2 = new Observer('Observer2');

// Subscribe observers to the subject
subject.subscribe(observer1);
subject.subscribe(observer2);

// Notify observers of a change
subject.notify('Hello Observers!');
// Output:
// Observer1 received message: Hello Observers!
// Observer2 received message: Hello Observers!

// Unsubscribe an observer
subject.unsubscribe(observer1);

// Notify observers of another change
subject.notify('Goodbye Observers!');
// Output:
// Observer2 received message: Goodbye Observers!
