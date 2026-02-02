/**
 * SWITCH — DSA Cheatsheet (JS)
 * ----------------------------
 * Multi-way branch: compare one value (strict ===) against many cases. O(1) per comparison; overall O(k) for k cases.
 *
 * Use when: Several discrete values (status codes, enums, single key). Cleaner than long if/else chains.
 * Avoid when: Ranges (use if/else), or dynamic keys at runtime (object/map lookup is often clearer).
 *
 * Fall-through: Without break, execution continues to the next case. Use intentionally for shared behavior.
 * default: Optional; runs when no case matches. Good for invalid input or catch-all.
 */

// --- Basic switch (strict equality ===) ---
const status = 200;
switch (status) {
  case 200:
    console.log("OK");
    break;
  case 404:
    console.log("Not Found");
    break;
  case 500:
    console.log("Server Error");
    break;
  default:
    console.log("Unknown");
}
// → "OK"

// --- Fall-through: multiple cases, one block ---
const key = "b";
switch (key) {
  case "a":
  case "A":
    console.log("alpha");
    break;
  case "b":
  case "B":
    console.log("beta");
    break;
  default:
    console.log("other");
}
// → "beta"

// --- Switch with expression (value can be any expression) ---
const x = 3;
switch (true) {
  case x < 0:
    console.log("negative");
    break;
  case x === 0:
    console.log("zero");
    break;
  case x > 0:
    console.log("positive");
    break;
}
// → "positive"

// --- Alternative: object/map for dynamic dispatch (no fall-through) ---
const handlers = {
  start: () => "running",
  stop: () => "stopped",
  pause: () => "paused",
};
const action = "start";
const result = handlers[action] ? handlers[action]() : "unknown";
// result === "running" ✅ use when keys are known at write time; object lookup O(1)

module.exports = { handlers, result };
