var fs = require("fs");
var express = require('express');
var app = express();
var currentId = 4;


app.get('/listUsers', function(req, res){
  const names = ["john", "peter", "becky", "anna", "alex",
    "pablo", "hector", "nancy", "alice"];
  const professions = ["doctor", "police officer", "fireman",
    "teacher", "developer", "business analytic"];

  var getRandomNumber = function(range) {
    return Math.floor(Math.random()*range);
  }

  fs.readFile(__dirname + "/users.json", 'utf8', function(error, data) {
    if(error){
      throw error;
    }

    res.end(data);
  });

  app.get('/addUser', function(req, res){
    let userName = "user" + ++currentId;
    let user = {
          "name" : names[getRandomNumber(names.length)],
          "pasword" : "password123",
          "profession" : professions[getRandomNumber(professions.length)],
          "id" : currentId
    };

    fs.readFile(__dirname + "/users.json", "utf8", function(error, data) {
      data = JSON.parse(data);
      data[userName] = user;

      res.end(JSON.stringify(data));

      fs.writeFile(__dirname + "/users.json", JSON.stringify(data), function(error) {
        if(error) {
          throw error;
        }

        console.log("New user saved successfully");
      });

    })

  });
})

var server = app.listen(8081, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log("Server is up and running on port: " + port);

})
