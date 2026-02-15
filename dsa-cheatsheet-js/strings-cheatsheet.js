/**
 * STRINGS — DSA Cheatsheet (JS)
 * ------------------------------
 * Immutable sequence of UTF-16 code units. All methods return new values; no in-place mutation.
 *
 * Time Complexity (typical):
 *   Access by index   O(1)
 *   Length            O(1)
 *   Concatenation     O(n + m)  — n, m = lengths of the two strings; new string
 *   Slice / split     O(k)      — k = result size
 *   Search (indexOf)  O(n)      — linear scan
 *   Space             O(n)      — per string
 *
 * Use when: Text, parsing, palindromes, pattern matching, building output from chars.
 * Avoid when: Heavy in-place edits (build array, join at end) or need key lookup (use Map).
 */

// ——— Creation & length ———
const s = "hello";
s.length; // 5 — number of UTF-16 units (not always grapheme count)
s[0]; // "h" — O(1) access; s[s.length - 1] for last
s.charAt(0); // "h" — same; .charAt out-of-range returns ""
s.at(-1); // "o" — negative index from end (ES2022)

// ——— Slice & substring (non-mutating; return new string) ———
// slice(start?, end?) — end exclusive; negative indices allowed
s.slice(1, 4); // "ell"
s.slice(2); // "llo" — to end
s.slice(-2); // "lo" — last 2
s.slice(1, -1); // "ell" — strip first and last char

// substring(start, end?) — end exclusive; negative → 0; swaps if start > end
s.substring(1, 4); // "ell"
s.substring(2); // "llo"

// substr deprecated; use slice instead

// ——— Concatenation ———
s + " world"; // "hello world" — O(n + m)
"".concat(s, " ", "world"); // "hello world"
["hello", " ", "world"].join(""); // "hello world" — useful when building from array

// ——— Case & whitespace ———
"  Hi  ".trim(); // "Hi" — trim start/end whitespace
"  Hi  ".trimStart(); // "Hi  "
"  Hi  ".trimEnd(); // "  Hi"
"Hello".toLowerCase(); // "hello"
"Hello".toUpperCase(); // "HELLO"
"hello".toLocaleLowerCase(); // locale-aware (e.g. "i".toLocaleLowerCase("tr") → "ı")

// ——— Search & presence ———
"hello".includes("ell"); // true — O(n)
"hello".startsWith("he"); // true
"hello".endsWith("lo"); // true
"hello".indexOf("l"); // 2 — first index, -1 if not found
"hello".indexOf("l", 3); // 3 — search from index 3
"hello".lastIndexOf("l"); // 3
"hello".search(/l+/); // 2 — first match index; -1 if none (regex)

// ——— Replace ———
"foo bar foo".replace("foo", "x"); // "x bar foo" — first only
"foo bar foo".replaceAll("foo", "x"); // "x bar x"
"hello".replace(/l/g, "L"); // "heLLo" — regex global
"a1b2".replace(/\d/g, ""); // "ab" — remove digits

// ——— Split & join ———
"a,b,c".split(","); // ["a", "b", "c"]
"a-b-c".split("-", 2); // ["a", "b"] — limit segments
"hello".split(""); // ["h","e","l","l","o"] — chars (careful with emoji: 1 char ≠ 1 unit)
[..."hello"]; // ["h","e","l","l","o"] — spread; better for Unicode
["a", "b", "c"].join("-"); // "a-b-c"
["a", "b"].join(""); // "ab"

// ——— Repeat & pad ———
"ab".repeat(3); // "ababab"
"7".padStart(3, "0"); // "007" — length 3, fill with "0"
"7".padEnd(3, "0"); // "700"

// ——— Character codes (ASCII / UTF-16) ———
"a".charCodeAt(0); // 97
String.fromCharCode(97); // "a"
"😀".codePointAt(0); // 128512 — full code point; use for emoji
String.fromCodePoint(128512); // "😀"

// ——— Regex (common in DSA) ———
"hello".match(/l+/g); // ["ll"] — all matches (g) → array; no g → first match + groups
"hello".match(/x/); // null — no match
"hello".replace(/[aeiou]/g, ""); // "hll" — remove vowels
"  word  ".trim().split(/\s+/); // ["word"] — words (collapse spaces)

// ——— Iteration ———
for (const c of "hi") {
  /* c = "h", then "i" */
}
for (let i = 0; i < s.length; i++) {
  s[i]; // access by index
}

// ——— Quick DSA patterns ———
// Check palindrome (after normalizing): two pointers or compare with reversed
const reversed = [...s].reverse().join(""); // "olleh"
// Strip non-alphanumeric for palindrome: s.toLowerCase().replace(/[^a-z0-9]/g, "")
// Build string from array (no repeated +): arr.join("") — O(n) vs O(n²) with += in loop
