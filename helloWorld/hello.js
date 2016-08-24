var http = require("http");
var serverPort = 8081;

http.createServer(function(request, response){
  response.writeHeader(200, {'Content-Type' : 'text/plain'});

  response.end("Hello World\n");
}).listen(serverPort);


console.log("Server is now running on port: " + serverPort);
