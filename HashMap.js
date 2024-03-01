// if (index < 0 || index >= buckets.length) {
//  throw new Error("Trying to access index out of bound");
//}

function hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
 
    return hashCode;
}

class HashMap {

set(key, value) {

}

get(key) {

}

has(key) {

}

remove(key) {

}

length() {

}

clear() {

}

keys() {

}

values() {

}

entries() {

}




}