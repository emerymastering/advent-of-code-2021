import fs from "fs";

// Importing data from file

const input = fs.readFileSync("./input.txt", "utf8").split("\n");

// Setting initial coordinates

let forward = 0;
let depth = 0;

// Calculating the coordinates

for (let i = 0; i < input.length - 1; i++) {
  const positionChange = +input[i].replace(/^\D+/g, "");
  console.log("oioi", positionChange);
  if (input[i].charAt(0) === "f") {
    forward = forward + positionChange;
  } else if (input[i].charAt(0) === "u") {
    depth = depth - positionChange;
  } else depth = depth + positionChange;
}

console.log("Forward:", forward);
console.log("Depth:", depth);
console.log("Answer:", depth * forward);
