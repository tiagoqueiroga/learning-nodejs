var Emitter = require('events');
var eventConfig = require('./config').events;

var emt = new Emitter();

emt.on(eventConfig.GREET,function(){
	console.log('Hello');
});

emt.on(eventConfig.GREET,function(){
	console.log('Hello there');
});


emt.emit('greet');