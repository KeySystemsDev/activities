'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitiesSchema = Schema({

	user: String,
	date: Date,
	to: {type: Array, "default" : [] },
	cc: {type: Array, "default" : [] },
	bcc: {type: Array, "default" : [] },
	activity: {type: Array, "default" : [] },
	expiration: Date

});

module.exports = mongoose.model('Activities',ActivitiesSchema)