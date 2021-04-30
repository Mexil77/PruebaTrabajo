var fs = require("fs");
require.extensions[".txt"] = function (module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

let Input = require("./input.txt");
let regex = /\s/;
let inputArray = Input.split(regex).filter((data) => data.length > 0);

let M1 = inputArray[3]
  .split("")
  .map((data) => data + "+")
  .join("");
let M2 = inputArray[4]
  .split("")
  .map((data) => data + "+")
  .join("");
let N = inputArray[5];

let regex1 = new RegExp(`${M1}`);
let regex2 = new RegExp(`${M2}`);

let find1 = regex1.test(N);
let find2 = regex2.test(N);

find1 ? console.log("SI") : console.log("NO");
find2 ? console.log("SI") : console.log("NO");
