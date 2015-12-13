var fs = require('fs');
// Syncronous
var greet = fs.readFileSync(__dirname + '/file.txt','utf8');
//console.log(greet);

// Asyncronous
var greet2 = fs.readFile(__dirname + '/file.txt','utf8',
	// Callback
	function(err,data){
		console.log(data);
	}
);