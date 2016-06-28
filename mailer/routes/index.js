var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/contact', function(req, res, next) {

	var transporter = nodemailer.createTransport('smtps://mrblonde1908gmail.com:theCLASH1987@smtp.gmail.com');


	var mailOptions = {
		from:'Nodemailer <nodemailer@something.com>',
		to:'tiagoqueiroga@gmail.com',
		subject:'Contact message',
		html:'<p>New message' + req.body.message + '</p>'
	};

	transporter.sendMail(mailOptions,function(error,info){
		if(error){
			console.log(error);
			res.redirect('/');
		}else{
			res.redirect('/');
		}
	});

});



module.exports = router;
