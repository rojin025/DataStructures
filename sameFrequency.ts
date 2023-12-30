export function isSame(num1: number, num2: number): boolean {
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

export type Count = { [key: string]: number };

export function sameFrequency(num1: number, num2: number): boolean {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1: Count = {};
  let countNum2: Count = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum2.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (const key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
