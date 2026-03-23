const fs = require("fs");
const path = require("path");

const root = process.cwd();
const nextDir = path.join(root, ".next");

fs.rmSync(nextDir, { recursive: true, force: true });
console.log("Dev cache reset.");
