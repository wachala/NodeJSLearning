var events = require("events");
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
  console.log("Connection succesful.");

  eventEmitter.emit("dataReceived");
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('dataReceived', function(){
  console.log("Data received succesfully.");
});

eventEmitter.emit('connection');
