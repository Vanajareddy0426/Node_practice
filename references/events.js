const EvenEmitter = require('events');

class MyEmitter extends EvenEmitter{ }

const myEmitter = new MyEmitter();


myEmitter.on('event',() => console.log('Event Fired'))

myEmitter.emit('event');