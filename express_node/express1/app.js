var express = require('express');
var cookieParser = require('cookie-parser')

var app = express();
var port = process.env.PORT || 3000;

// Define Routes
require('./routes')(app);

// Template Engine
app.set('view engine','ejs');

//Middleware static
app.use('/assets',express.static(__dirname + '/public'));

// Cookie middleware
app.use(cookieParser())

// My own middleware
app.use('/',function(req,res,next){
	console.log('Request Url:' + req.url);
	console.log("Cookies: ", req.cookies)

	if(req.url === '/'){
		console.log("Hi you're in the home");
	}
	next();
});



app.listen(port);