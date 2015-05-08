var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true, index: true },
	password: { type: String, required: true },
	cart: { type: [] },
	orders: { type: [] }
}); 



module.exports = mongoose.model('User', userSchema);

