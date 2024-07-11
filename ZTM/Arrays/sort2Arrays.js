function mergeSortedArrays(array1, array2) {
    var mergeredArray = [];
    var i = 1;
    var j = 1;
    var array1Item = array1[0];
    var array2Item = array2[0];
    if ((array1.length = 0)) {
        return array2;
    }
    if ((array2.length = 0)) {
        return array1;
    }
    while (array1Item || array2Item) {
        console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) {
            mergeredArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else {
            mergeredArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergeredArray;
}
// console.log("Happy Coding");
console.log(mergeSortedArrays([1, 2, 3], [0, 2, 4]));
// console.log(mergeSortedArrays([], [0, 2, 4]));
// console.log(mergeSortedArrays([7, 8, 9], [0, 2, 4]));
