import fs from "fs";

// Importing data from file

const input = fs.readFileSync("./input.txt", "utf8").split("\n");

let count = {};

for (let line of input) {
  for (let i = 0; i < line.length; i++) {
    console.log(count[i]);
    if (!count[i]) {
      // Initialize [zeros_count, ones_count]
      count[i] = [0, 0];
    }

    let val = +line[i];

    count[i][val]++;
  }
}

let mins = [];
let maxs = [];
for (let counts of Object.values(count)) {
  if (counts[0] > counts[1]) {
    maxs.push(0);
    mins.push(1);
  } else {
    maxs.push(1);
    mins.push(0);
  }
}

let min = parseInt(mins.join(""), 2);
let max = parseInt(maxs.join(""), 2);

console.log(min * max);
