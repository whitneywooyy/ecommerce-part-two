var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = 9001;
var mongoUri = 'localhost:27017/ecommerce';

var productCtrl = require('./product-controller.js');


app.use(cors());
app.use(bodyParser.json());


mongoose.connect(mongoUri,function(err){
	if (err) {
		console.log(err)
		return;
	}
	console.log('Connected to Mongo at: ', mongoUri);
	app.listen(port, function(){
		console.log('Now listening on port: ' + port);
	});
})

app.get('/api/products', productCtrl.get);

app.post('/api/products', productCtrl.post);

app.put('/api/products', productCtrl.put);

app.delete('/api/products', productCtrl.delete);
