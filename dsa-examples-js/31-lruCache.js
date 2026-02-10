/**
 * LRU Cache — get(key) and put(key, value) in O(1). Evict least recently used when at capacity.
 * Map preserves insertion order in JS; move to end on get to mark "recent". O(1) get/put.
 */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // key → value; Map order = insertion order (oldest first)
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val); // move to end (most recent)
    return val;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      const oldest = this.cache.keys().next().value;
      this.cache.delete(oldest);
    }
  }
}

const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1));   // 1
lru.put(3, 3);             // evicts 2
console.log(lru.get(2));   // -1
console.log(lru.get(3));   // 3
