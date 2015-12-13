var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/file.txt',{encoding:'utf8',highWaterMark:32 * 1024});

var writeable = fs.createWriteStream(__dirname + '/file_copied.txt');


// Listener
readable.on('data',function(chunk){
	console.log(chunk);
	writeable.write(chunk);
});