#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

function watch(target) {
  const p = path.resolve(target);
  if (!fs.existsSync(p)) {
    throw new Error(`path does not exist: ${p}`);
  }
  console.log(`watching ${p} ...`);
  fs.watch(p, (event, filename) => {
    console.log(`[${event}] ${filename ?? "(unknown)"}`);
  });
}

function main() {
  const target = process.argv[2] || ".";
  watch(target);
}

main();
