// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// SERVER VARIABLES
var app = express();

// EXPRESS MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

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