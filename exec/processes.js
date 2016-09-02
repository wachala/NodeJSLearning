var fs = require('fs');

const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
  var peon = child_process.exec('sample.js ' + i,
   function(error, stdout, stderr) {
     if(error) {
       console.log("Something went wrong");
       console.log("Error code: " + error.code);
       console.log("Signal received: " + error.signal);
     }

     console.log("stdout: " + stdout);
     console.log("stderr: " + stderr);
  });

  peon.on('exit', function(code) {
    console.log("Child process exited with code: " + code);
  })
}
