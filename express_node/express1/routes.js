module.exports = function(app){
		app.get('/',function(req,res){
			res.render('index');
		});

		app.get('/person/:id',function(req,res){
				res.send('<html><head></head><body>Person:' + req.params.id + '</body></html>');
		});

		app.get('/api',function(req,res){
			res.json({developer:'Tiago Queiroga',version:'1.0'});
		});
}