var express = require("express");
var app = express();
var port = 3000;

// Views
app.set('views', __dirname + '/views');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);


app.use(express.static(__dirname + '/public'));

// Routers
app.get("/", function(req, res){
    res.render("index");
});

var io = require('socket.io').listen(app.listen(port));


// Io Events
io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});