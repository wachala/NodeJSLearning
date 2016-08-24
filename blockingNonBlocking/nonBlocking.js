var fs = require("fs");

fs.readFile('sampleFile.txt', function(error, data){
  if(error) {
    return console.error(error);
  }
  console.log(data.toString());
});

console.log("Program has ended");
