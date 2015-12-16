var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	var obj = {
		name : 'Tiago',
		lastname : 'Queiroga'	
	}
	
	res.end(JSON.stringify(obj));
	
}).listen(3000,'127.0.0.1');