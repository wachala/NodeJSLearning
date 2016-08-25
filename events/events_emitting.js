var events = require("events");
var eventsEmitter = new events.EventEmitter();


var firstListener = function(){
  console.log("First listener executed.");
}

var secondListener = function(){
  console.log("Second listener executed.");
}

eventsEmitter.addListener('connection', firstListener);
eventsEmitter.on('connection', secondListener);

let eventListeners = events.EventEmitter.listenerCount(eventsEmitter, 'connection');

console.log("Number of listeners for 'connection' event: " + eventListeners);

eventsEmitter.emit('connection');
eventsEmitter.removeListener('connection', firstListener);

console.log("Removed first listener.");

eventsEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventsEmitter, 'connection');

console.log("Number of listeners for 'connection' event: " + eventListeners);

console.log("End of program.");
