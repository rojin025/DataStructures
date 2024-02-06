// Algorithm findValue(k)
// Pass key and get value item
// findItem(k)
function findValue(k) {
  return findItem(k).value();
}

// Algorithm findItem(k)
// function findItem(k) {
//   let i = hash(k); // Hashed index
//   let p = 0;

//   while (p < N) {
//     // N – Table size
//     let x = (i + p) % N;
//     let item = A[x]; // Retrieve from the x index

//     if (item === null) {
//       return "NO_SUCH_KEY";
//     } else if (item.key() === k) {
//       return item;
//     } else {
//       p = p + 1; // Linear probing to find next index
//     }
//   }

//   return "NO_SUCH_KEY";
// }

// removeValue(k) {
//     const item = findItem(k);
//     if (item == "NO_SUCH_KEY")
// 		return "NO_SUCH_KEY";

// 	const index = h(k);
// 	table[index] = AVAILABLE;
//     return item.value();
//   }

function insertItem(item) {
  let k = item.key();
  let i = hash(k); // Hashed index
  let p = 0;

  while (p < N) {
    let x = (i + p) % N;
    if (A[x] === null || A[x] === "AVAILABLE") {
      A[x] = item;
      return "INSERT_SUCCESS";
    } else {
      p = p + 1; // Linear probing to find next index
    }
  }

  return "TABLE_FULL";
}
