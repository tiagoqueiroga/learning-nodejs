var EventEmitter = require('events');
var util = require('util');

function Greetr(){
	this.greeting = "Hello mate!";
}

util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet = function(){
	EventEmitter.call(this);
	console.log(this.greeting);
	this.emit('greet',new Date());
}

var greeter1 = new Greetr();

// Listerner
greeter1.on('greet',function(data){
	console.log('Someone greeted at: ' + data);
});

greeter1.greet();