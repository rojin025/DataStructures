function mergeSortedArrays(array1: number[], array2: number[]) {
  const mergeredArray: number[] = [];
  let i = 0;
  let j = 0;
  let array1Item = array1[0];
  let array2Item = array2[0];

  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergeredArray.push(array1Item);
      i++;
      array1Item = array1[i];
    } else {
      mergeredArray.push(array2Item);
      j++;
      array2Item = array2[j];
    }
  }

  return mergeredArray;
}

console.log("Happy Coding2");
// console.log(mergeSortedArrays([1, 2, 3, 8], [0, 2, 4]));
// console.log(mergeSortedArrays([], [0, 2, 4]));
console.log(mergeSortedArrays([7, 8, 9], [0, 2, 4]));
