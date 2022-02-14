class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;
    let h = this.head;
    let newTail = h;
    while (h.next) {
      newTail = h;
      h = h.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return h.value;
  }
  size() {
    return this.length;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.size();
