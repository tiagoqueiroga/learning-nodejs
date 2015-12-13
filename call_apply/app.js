var obj = {
	name  : 'Tiago',
	greet : function(){
		console.log(`Hello ${this.name}`)
	}
}

obj.greet();
obj.greet.call({name:'Test Call'});