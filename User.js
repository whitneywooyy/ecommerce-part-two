var mongoose= require('mongoose');

var schema = mongoose.Schema({

	title: { type: String, unique: true, required: true, index: true },
	description: { type: String, required: true },
	price: { type: Number, min: 0 }

});

module.exports = mongoose.Model('Product', schema);
