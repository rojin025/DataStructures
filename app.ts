console.log("App Running");

//
/**
sameFrequency(182,281)          // true
sameFrequency(34,14)            // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222)           // false
 */
function isSame(num1: number, num2: number): boolean {
  let result = 0;
  while (num1 > 0) {
    result *= 10;
    const rem = num1 % 10;
    num1 = Math.floor(num1 / 10);
    result = rem + result;
  }
  console.log(result === num2);
  return result === num2;
}

function rem(num1: number) {
  const rem = num1 % 10;
  num1 = Math.floor(num1 / 10);
  console.log(rem);
  console.log(num1);
}

// // rem(101);
// rem(0);

isSame(182, 281); // true
isSame(34, 14); // false
isSame(3589578, 5879385); // true
isSame(22, 222); // false
