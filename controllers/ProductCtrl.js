var Product = require('../models/Product');	// Doesn't need .js

module.exports = {
	create: function(req, res){
		var newProduct = new Product(req.body);
		newProduct.save(function(err, result){
			if (err) return res.status(500).send(err);
			else res.send(result);
		})
		// res.send('create test');
	},
	read: function(req, res){
		Product
		.find(req.query)
		.exec(function(err, result){
			if (err) return res.status(500).send(err);
			else res.send(result);
		});	
		// res.send('read test');
	},
	update: function(req, res){
		Product
		.findByIdAndUpdate(req.params.id, req.body, function(err, result){
				if (err) return res.status(500).send(err);
				else res.send(result);
		});
		// res.send('update test');
	},
	delete: function(req, res){
		Product
		.findByIdAndRemove(req.params.id, function(err, result){
				if (err) return res.status(500).send(err);
				else res.send(result);
		});
		// res.send('delete test');
	}
}