const eventsLogger = require('./eventsLogger');

const EventEmiiter = require('events');

class MyEmitter extends EventEmiiter {};

//initialize object
const myEmitter = new MyEmitter();

//add listner for the log event
myEmitter.on('log', (msg) => eventsLogger(msg));

setTimeout(() => {
    //Emit event
    myEmitter.emit('log', 'Log Event emitted!');
}, 2000)
