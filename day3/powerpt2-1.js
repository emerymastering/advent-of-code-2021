// Plan

// Oxigen gen rating
// 1. check which number dominates in the column and leave only those lines with such number.
// .  meaning to make new array with those numbers.
// 2 then go to 2nd column and check again which nr dominates and make again new array
// . do it till last number left.
// 3 if there is equal amount of 1ns and 0s then keep 1s
// 4 conver last binary to decimal.

// CO2 scrubber rating
// 1. do same but vice versa. choose for non domintating number in this case.

import fs from "fs";

// Importing data from file

const input = fs.readFileSync("./input.txt", "utf8").split("\n");

let dataObj = Object.assign({}, input);

// Creating object with the amounts of 1s and 0s in each column

let countObj = {};
let newArray = input;

const calcCounts = () => {
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
};

for (let i = 0; i < Infinity; i++) {
  calcCounts();
  console.log("Length:", newArray.length);

  countObj[i][0] >= countObj[i][1]
    ? (newArray = newArray.filter((element) => {
        return element.charAt(i) === "1";
      }))
    : (newArray = newArray.filter((element) => {
        return element.charAt(i) === "0";
      }));
  dataObj = Object.assign({}, newArray);
  console.log(countObj);
  countObj = {};
  console.log("line", i, newArray);
  if (newArray.length === 1) {
    break;
  }
}

console.log("oxy:", newArray, parseInt(newArray, 2));
