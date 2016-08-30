var fs = require('fs');

fs.mkdir('./sampleDirectory', 0777, function(error) {
  if(error){
    throw error;
  }
  console.log("Directory created successfully");

  fs.writeFile('./sampleDirectory/hello.txt', "Hello you", function(error) {
    if(error) {
      throw error;
    }
    console.log("File created successfully");

    fs.readFile('./sampleDirectory/hello.txt', "UTF-8", function(error, data) {
      if(error) {
        throw error;
      }
      console.log("Content of the file: " + data);
    });
  });
});
