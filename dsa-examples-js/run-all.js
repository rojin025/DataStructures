#!/usr/bin/env node
/**
 * Run all example files in order (skips README and this file).
 */
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const files = fs.readdirSync(dir)
  .filter(f => f.endsWith(".js") && f !== "run-all.js" && f !== "run-tests.js")
  .sort();

for (const file of files) {
  const filePath = path.join(dir, file);
  console.log("\n" + "=".repeat(60));
  console.log(">>> " + file);
  console.log("=".repeat(60));
  try {
    require(filePath);
  } catch (e) {
    console.error("Error:", e.message);
  }
}
console.log("\nDone.\n");
