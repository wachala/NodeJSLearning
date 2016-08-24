var fs = require("fs");

var data = fs.readFileSync("sampleFile.txt");

console.log(data.toString());
console.log("Program has ended");
