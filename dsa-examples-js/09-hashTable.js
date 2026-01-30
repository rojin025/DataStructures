/**
 * Hash Table — set, get, keys, values (simple array buckets).
 */
function hash(key, size = 53) {
  let total = 0;
  const PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    total = (total * PRIME + key.charCodeAt(i)) % size;
  }
  return total;
}
class HashTable {
  constructor(size = 53) {
    this.keyMap = Array.from({ length: size }, () => []);
  }
  _hash(k) {
    return hash(k, this.keyMap.length);
  }
  set(key, val) {
    const i = this._hash(key);
    const bucket = this.keyMap[i];
    const found = bucket.find((p) => p[0] === key);
    if (found) found[1] = val;
    else bucket.push([key, val]);
    return this;
  }
  get(key) {
    const i = this._hash(key);
    const pair = this.keyMap[i].find((p) => p[0] === key);
    return pair ? pair[1] : undefined;
  }
  keys() {
    return this.keyMap.flat().map((p) => p[0]);
  }
  values() {
    return this.keyMap.flat().map((p) => p[1]);
  }
}

const ht = new HashTable();
ht.set("Java", "I love Java")
  .set("Rust", "Rust is cool")
  .set("JS", "JS is everywhere");
console.log(ht.get("Rust"), ht.keys(), ht.values());
