import fs from "fs";

// Importing data from file

const input = fs.readFileSync("./input.txt", "utf8").split("\n");

// console.log(input);

let count = {};

for (let line of input) {
  for (let i = 0; i < line.length; i++) {
    // console.log(count[i]);
    if (!count[i]) {
      // Initialize [zeros_count, ones_count]
      count[i] = [0, 0];
    }

    let val = +line[i];

    count[i][val]++;
    console.log("count", count[i]);
  }
}

let mins = [];
let maxs = [];
// console.log(count);
// console.log(Object.values(count));
for (let counts of Object.values(count)) {
  if (counts[0] > counts[1]) {
    maxs.push(0);
    mins.push(1);
  } else {
    maxs.push(1);
    mins.push(0);
  }
}
// console.log(mins, maxs);
let min = parseInt(mins.join(""), 2);
let max = parseInt(maxs.join(""), 2);

// console.log(min, max);

console.log(min * max);
