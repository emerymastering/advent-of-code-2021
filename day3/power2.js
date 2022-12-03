// const dataObj = {
//   1: "101010101",
//   2: "110101010",
//   3: "111011111",
// };

import fs from "fs";

// Importing data from file

const input = fs.readFileSync("./input.txt", "utf8").split("\n");

const dataObj = Object.assign({}, input);

console.log(dataObj);

// Creating object with the amounts of 1s and 0s in each column

let countObj = {};

for (let line of Object.values(dataObj)) {
  for (let i = 0; i < line.length; i++) {
    if (!countObj[i]) {
      // Initialize [zeros_count, ones_count]
      countObj[i] = [0, 0];
    }
    if (line[i] === "1") {
      countObj[i][0]++;
    } else {
      countObj[i][1]++;
    }
  }
}
console.log("coounting:", countObj);

let code = [];
let reverseCode = [];

for (let line of Object.values(countObj)) {
  if (line[0] > line[1]) {
    code.push(1);
    reverseCode.push(0);
  } else {
    code.push(0);
    reverseCode.push(1);
  }
}

const codeToDecimal = parseInt(+String([...code]).replaceAll(",", ""), 2);
const revCodeToDecimal = parseInt(
  +String([...reverseCode]).replaceAll(",", ""),
  2
);

console.log(codeToDecimal);
console.log(revCodeToDecimal);
console.log(codeToDecimal * revCodeToDecimal);
