import fs from "fs";

// Importing data from file

const input = fs
  .readFileSync("./input.txt", "utf8")
  .split("\n")
  .map((line) => {
    let [movement, amount] = line.split(" ");
    amount = +amount;

    return { movement, amount };
  });

// Setting initial coordinates

let forward = 0;
let depth = 0;

// Calculating the coordinates

for (let { movement, amount } of input) {
  if (movement === "up") {
    depth -= amount;
  } else if (movement === "down") {
    depth += amount;
  } else if (movement === "forward") {
    forward += amount;
  }
}

console.log("Forward:", forward);
console.log("Depth:", depth);
console.log("Answer:", depth * forward);
