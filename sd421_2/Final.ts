// Algorithm findValue(k)
// Pass key and get value item

function findValue(key) {
  return findItem(key).value();
}

// Algorithm findItem(key)
function findItem(key) {
  let i = hash(key); // Hashed index
  let p = 0;

  while (p < N) {
    // N – Table size
    let hashKey = (i + p) % N;
    let item = array[hashKey]; // Retrieve from the hashKey index

    if (item === null) {
      return "NO_SUCH_KEY";
    } else if (item.key() === key) {
      return item;
    } else {
      p = p + 1; // Linear probing to find next index
    }
  }

  return "NO_SUCH_KEY";
}

function removeValue(key) {
  let index = hash(key);
  let p = 0;

  while (p < N) {
    hashKey = (index + p) % N;

    if (array[hashKey] == null || array[hashKey] == "AVAILABLE")
      return "NO_SUCH_KEY";

    if (array[hashKey].key() === key) {
      removedValue = array[hashKey];
      array[hashKey] = "AVAILABLE";
      return removedValue;
    }
    p += 1;
  }

  return "NO_SUCH_KEY";
}

function insertItem(item) {
  let key = item.key();
  let index = hash(key); // Hashed index
  let p = 0;

  while (p < N) {
    let hashKey = (index + p) % N;
    if (array[hashKey] === null || array[hashKey] === "AVAILABLE") {
      array[hashKey] = item;
      return "INSERT_SUCCESS";
    } else {
      p = p + 1; // Linear probing to find next index
    }
  }
  return "TABLE_FULL";
}
