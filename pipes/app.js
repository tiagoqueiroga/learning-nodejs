var fs = require('fs');
var zlib = require('zlib');


var readable = fs.createReadStream(__dirname + '/file.txt');
var writeable = fs.createWriteStream(__dirname + '/file_copied.txt');
var compressed = fs.createWriteStream(__dirname + '/file_copied.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writeable);
readable.pipe(gzip).pipe(compressed);