function takeShower() {
  console.log("Taking Shower");
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
export function wakeUp() {
  takeShower();
  console.log(eatBreakfast());
  console.log("Ok ready to go to work!");
}

export function countDown(num: number) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num--);
  countDown(num);
}

export function factorial(num: number): number {
  if (num < 1) {
    console.log("Invalid input: ", num);
    return num;
  }
  if (num === 1) return 1;
  return num * factorial(--num);
}

export function collectOddNum(arr: number[]): number[] {
  let result: number[] = [];

  function helper(num: number[]) {
    if (num.length === 0) return;
    if (num[0] % 2 !== 0) result.push(num[0]);
    helper(num.slice(1));
  }
  helper(arr);
  return result;
}

export function collectEvenNum(arr: number[]): number[] {
  let result: number[] = [];

  if (arr.length === 0) return arr;
  if (arr[0] % 2 === 0) result.push(arr[0]);
  return result.concat(collectEvenNum(arr.splice(1)));
}
