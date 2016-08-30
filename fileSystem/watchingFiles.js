var fs = require("fs");

fs.writeFile("./sample.txt", "Just sample text", function(error) {
  if(error) {
    throw error;
  }

  fs.watchFile("./sample.txt", function(prev, curr) {
    console.log("Current mtime:  " + curr.mtime);
    console.log("Previous mtime: " + prev.mtime);
  });

  fs.writeFile("./sample.txt", "additional Text", function(error){
    if(error) {
      throw error;
    }
    console.log("Writing to file complete");
  });
});
