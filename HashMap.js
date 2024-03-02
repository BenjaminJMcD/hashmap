

// if (index < 0 || index >= buckets.length) {
//  throw new Error("Trying to access index out of bound");
//}

let buckets = new Array(16);



// KEY = FRED, VALUE = SMITH. KEY --> HASHCODE == INDEX OF BUCKET. BUCKET == LINKED LIST W KEY AND VALUE

// ALL KEYS MUST BE UNIQUE ---  CANT HAVE TWO PEOPLE NAMED JOHN --- OVERWRITE VAL IF NEW JOHN

// FUNCTION ABOVE SHOULD FIV COLLISIONS

console.log(buckets[0])

class HashMap {



hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i))%buckets.length;
    }
    return hashCode
}

set(key, value) {

    // get hash from key
    let bucketIndex = this.hash(key);
    // check if hash index is empty --- 
    if (buckets[bucketIndex]) {
        console.log("CHAMS");
        let oldLL = buckets[bucketIndex];
        let alreadyExists = oldLL.contains(key);
        let oldIndex = oldLL.find(key);
        if (alreadyExists) {
            oldLL.removeAt(oldIndex);
        }
        oldLL.append(key, value);
        
        //oldLL.append(key, value);
    }
    else {
        console.log("Nah");
        let newLL = new LinkedList;
        newLL.append(key, value);
        buckets[bucketIndex] = newLL;
    }
        //YES = create new LL , append newNode, add to bucketIndex
        //NO ---
            // check if key exists .contains(key) ---
                // YES = find index .find(key)---
                    // .removeAt(index) ---
                    // .append newNode
                // NO = .append newNode


}

get(key) {
    // RETURNS VALUE
    // IF NOT FOUND RETURNS NULL
}

has(key) {
    // RETURNS TRUE IF EXISTS
    // RETURNS FALSE IF DOESNT
}

remove(key) {
    // FINDS NODE WITH KEY
    // REMOVES NODE
    // RETURNS TRUE
    // IF DOESNT EXIST RETURNS FALSE
}

length() {
    // RETURNS NUMBER OF NODES IN ALL BUCKETS COMBINED
}

clear() {
    // REMOVES ALL NODES IN ALL BUCKETS
}

keys() {
    // RETURNS ARRAY OF ALL KEYS
}

values() {
    // RETURNS ARRAY OF ALL VALUES
}

entries() {
    // RETURNS ARRAY OF ALL KEY-VALUE PAIRS
}

}



function createNode(key, value) {
    return {
        key: key,
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

append(key, value) {
    this.length++
    let newNode = createNode(key, value);

    if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
        return newNode;
    }
    this.head = this.tail = newNode;
    return newNode;
}

prepend(key, value) {
    this.length++
    let newNode = createNode(key, value);

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

contains(key) {
    let check = false
    let node = this.head;

    while (node) {
        if (node.key == key) {
            check = true;
            return check;
        }
        node = node.next
    }
    return check;
}

find(key) {
    let index = 0;
    let node = this.head;
    while (node) {
        if (node.key == key) {
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
    else if (this.length == 1) {
        this.pop();
        this.length--;
    }
    else {
        let previousNode = null;
        let currentNode = this.head;
        for (let i=0; i<index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    previousNode.next = currentNode.next;
    this.length--
    }

}

}

const map = new HashMap;

map.set("first", "Done");
console.log(buckets)
map.set("first", "chillroy");
console.log(buckets)