interface HashType {
  [key: string]: string;
}

export class HashTable {
  keyMap: HashType[] | null[];
  constructor(size: number = 17) {
    this.keyMap = new Array(size);
  }

  _hash(key: string): number {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = Math.abs(key.charCodeAt(i) - 96);
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /** need work -> not happy with -ve index */
  set(key: string, value: string) {
    let index: number = this._hash(key);
    if (this.keyMap[index]) {
      console.log(this.keyMap[index], "value exist");
      //   while (this.keyMap[index]) {
      //     index++;
      //   }
      console.log(index);
    }
    this.keyMap[index] = { key, value };
  }

  get(key: string) {
    let index = this._hash(key);
    if (this.keyMap[index] && this.keyMap[index]?.key === key)
      return this.keyMap[index]?.value;
    return undefined;
  }
}
