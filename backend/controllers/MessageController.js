const mongoose = require('mongoose');
const db = require('../db');
const async = require('async');
const validator = require('validator');

// import user model
const Message = require('../models/messageModel.js');

// retrieve a list of all users
exports.get = (req, res) => {
  console.log("yo");
  Message.find({}).then(messages => {
			res.json(messages);
		})
		.catch(err => {
			res.status(422).send(err.errors);
		});
};

exports.post = (req, res) => {
  console.log("msg post");
  console.log(req.body.id);
  console.log(req.body.content);
  Message.insertMany([{
    id: "hadsf",
    content: "adfa"
  }]).then(x => {
			res.json(x);
		})
		.catch(err => {
			res.status(422).send(err.errors);
		});
}
