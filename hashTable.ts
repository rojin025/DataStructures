interface HashType {
  [key: string]: string;
}

export class HashTable {
  keyMap: HashType[] | null[];
  constructor(size: number = 5) {
    this.keyMap = new Array(size);
  }

  _hash(key: string): number {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key.charCodeAt(i) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key: string, value: string) {
    let index: number = this._hash(key);
    this.keyMap[index] = { key, value };
  }
}
