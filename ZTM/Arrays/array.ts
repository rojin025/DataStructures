const str = ["a", "b", "c"];

console.log("Output is :", str[2]);

str.push("d"); // O(1)
str.pop(); // O(1)

str.unshift("0"); // O(n)
console.log(str);
