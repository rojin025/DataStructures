/**
 * Reverse String 
    - 'Hello World'
    output - 'dlroW olleH'
 */

function reverse(str: string) {
  let charLength = str.length;
  let result: string[] = [];

  for (let i = charLength; i >= 0; i--) {
    result.push(str[i]);
  }

  return result.join("");
}

function reverse2(str: string) {
  return str.split("").reverse().join("");
}

const reverse3 = (str: string) => str.split("").reverse().join("");

const reverse4 = (str: string) => [...str].reverse().join("");
