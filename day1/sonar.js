// Day1 https://adventofcode.com/2021/day/1
// Plan:
// 1 get data from https://adventofcode.com/2021/day/1/input
// 2 put data in array
// 3 check if next number is bigger than previous and increase count if so
// 4 in nd part count 3 numbers together and comapre to previous sliding 3 and show how many are bigger

import fs from "fs";

// Importing data from file

const input = fs.readFileSync("./input.txt", "utf8").split("\n").map(Number);

let count = 0;

for (let i = 0; i < input.length - 1; i++) {
  let current = input[i];
  let next = input[i + 1];

  next > current ? count++ : null;
}

// console.log(count);

let countThree = 0;

for (let i = 0; i < input.length - 3; i++) {
  let a = input[i];
  let b = input[i + 1];
  let c = input[i + 2];
  let d = input[i + 3];

  let current = a + b + c;
  let next = b + c + d;

  if (next > current) {
    countThree++;
  }
}

console.log(countThree);
