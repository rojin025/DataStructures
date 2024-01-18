// Side

let count = 0;
export function recursion() {
  count++;
  if (count >= 3) return count;
  return recursion;
}

// export
