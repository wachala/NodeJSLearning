const fs = require("fs")
const writer = process.stdout;
const util = require("util");

fs.readdir(__dirname, function(error, files){
  if(error) {
    throw error;
  }

  files.forEach(function(file) {
    fs.stat(__dirname + "/" + file, function(error, stats) {
      if(error) {
        throw error;
      }

      writer.write(file + "    ");

      if(stats.isFile()) {
        writer.write("file");
      }
      if(stats.isDirectory()) {
        writer.write("dir");
      }
      if(stats.isSymbolicLink()) {
        writer.write("link");
      }
      if(stats.isFIFO()) {
        writer.write("fifo")
      }
      if(stats.isSocket()) {
        writer.write("socket");
      }
      writer.write("\n");
    })
  });
})
