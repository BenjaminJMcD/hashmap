
function createNode(value) {
    return {
        value: value,
        next: null,
    };
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

append(value) {
    this.length++
    let newNode = createNode(value);

    if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
        return newNode;
    }
    this.head = this.tail = newNode;
    return newNode;
}

prepend(value) {
    this.length++
    let newNode = createNode(value);

    if (this.head) {
        newNode.next = this.head;
        this.head = newNode;
        return newNode;
    }
    this.head = this.tail = newNode;
    return newNode;
}

size() {
    return this.length;
}

printHead() {
    return this.head.value;
}

printTail() {
    return this.tail.value;
}

at(index) {
    if (index == 0) {
        return this.head.value;
    }
    else if (index >= this.length) {
        throw new Error("Beyond List Length");
    }
    let node = this.head;
    let place = 0;
    while (node) {
        if (place == index) {
            return node.value
        }
        node = node.next;
        place++;
    }
}

pop() {
    this.length--;
    let node = this.head;
    while (node) {
        if (node.next == this.tail) {
            node.next = null;
            this.tail = node;
        }
        node = node.next;
    }
}

contains(value) {
    let check = false
    let node = this.head;

    while (node) {
        if (node.value == value) {
            check = true;
            return console.log(check);
        }
        node = node.next
    }
    return console.log(check)
}

find(value) {
    let index = 0;
    let node = this.head;
    while (node) {
        if (node.value == value) {
            return index;
        }
        node = node.next;
        index++;
    }
}

toString() {
    let node = this.head;
    while (node) {
        console.log(`( ${node.value} ) ->`)
        node = node.next;
    }
    console.log("null")
}

insertAt(value, index) {
    if (index > this.length) {
        throw new Error("Insert index out of bounds");
      }
      if (index === 0) {
        return this.prepend(value);
      }
      let previousNode = null;
      let currentNode = this.head;
      for (let i=0; i<index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      const newNode = createNode(value);
      newNode.next = currentNode;
      previousNode.next = newNode;
      this.length++;
      return newNode;
}

removeAt(index) {
    if (index > this.length) {
        throw new Error("Remove index out of bounds");
    }
    let previousNode = null;
    let currentNode = this.head;
    for (let i=0; i<index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    console.log(previousNode)
    previousNode.next = currentNode.next;
    this.length--

}

}