const mongoose = require('mongoose');
const db = require('../db');
const async = require('async');
const validator = require('validator');

// import user model
const Flight = require('../models/flightModel.js');

// retrieve a list of all users
exports.get = (req, res) => {
  console.log("yo");
  Flight.find({}).then(flights => {
	  		console.log(flights);
			res.json(flights);
		})
		.catch(err => {
			res.status(422).send(err.errors);
		});
};