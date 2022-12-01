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
let aim = 0;

// Calculating the coordinates

for (let { movement, amount } of input) {
  if (movement === "up") {
    aim -= amount;
  } else if (movement === "down") {
    aim += amount;
  } else if (movement === "forward") {
    forward += amount;
    depth += aim * amount;
  }
}

console.log("Forward:", forward);
console.log("Depth:", depth);
console.log("Answer:", depth * forward);
