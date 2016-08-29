var express = require("express");
var app = express();

app.get('/', function(req, res){
  console.log("GET request for homepage");
  res.send("Hello GET");
})

app.post("/", function(req, res){
  console.log("POST request for the homepage");
  res.send("Hello POST");
})

app.delete('/deleteRes', function(req, res){
  console.log("DELETE request for /deleteRes");
  res.send("Hello DELETE");
})

app.get("/users", function(req, res){
  console.log("GET request for /users");
  let users = [{"name": "user1", "level": 5}, {"name": "sampleUser", "level": 3}]

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users));
})

app.get('/some*thing', function(req, res) {
   console.log("GET request for pattern matching /some*thing");
   res.send('Pattern /some*thing matched');
})

var server = app.listen(8080, function(){
  let host = server.address().address;
  let port = server.address().port;

  console.log("Server started on:" + host + ":" + port);
})
