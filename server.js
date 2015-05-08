// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// CONTROLLERS
var ProductCtrl = require('./controllers/ProductCtrl');	// Don't need .js at the end

// SERVER VARIABLES
var app = express();

// EXPRESS MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

// ENDPOINTS

// TEST ENDPOINT
// app.get('/', function(req, res){
// 	res.send('hello');
// });
app.post('/product', ProductCtrl.create);	// Referencing SightingCtrl.create in SightingCtrl.js
app.get('/product', ProductCtrl.read);
app.put('/product/:id', ProductCtrl.update);
app.delete('/product/:id', ProductCtrl.delete);

// CONNECTIONS
var port = 6789;
var mongoUri = 'mongodb://localhost:27017/ecommerce-proj';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to mongoDB at:', mongoUri);
});

// LISTENING
app.listen(port, function(){
	console.log('Listening on port', port);
})