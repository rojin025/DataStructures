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
