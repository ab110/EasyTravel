const mongoose = require('mongoose');
const db = require('../db');
const async = require('async');
const validator = require('validator');

// import user model
const Message = require('../models/messageModel.js');

// retrieve a list of all users
exports.get = (req, res) => {
  Message.find({}).then(messages => {
			res.json(messages);
		})
		.catch(err => {
			res.status(422).send(err.errors);
		});
};

exports.post = (req, res) => {
  console.log(req.body.userid);
  console.log(req.body.content);
  Message.insertMany([{
    userid: req.body.userid,
    content: req.body.content
  }]).then(x => {
			res.json(x);
		})
		.catch(err => {
			res.status(422).send(err.errors);
		});
}
