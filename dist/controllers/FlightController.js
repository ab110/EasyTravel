const mongoose = require('mongoose');
const db = require('../db');
const async = require('async');
const validator = require('validator');

// import user model
const Flight = require('../models/flightModel.js');

// retrieve a list of all users
exports.list = (req, res) => {
  console.log("yo");
  Flight.find({ name: "United" }).then(x => {
    console.log(x);
  });
};