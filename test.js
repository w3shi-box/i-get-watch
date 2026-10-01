const assert = require("assert");
const fs = require("fs");

assert.ok(fs.existsSync("index.js"), "index.js should exist");
console.log("ok");
