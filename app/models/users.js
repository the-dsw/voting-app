'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	
	id: String,
	username: String,
	email: String,
    password: String
	
});

module.exports = mongoose.model('User', User);
