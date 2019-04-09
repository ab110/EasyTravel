const mongoose = require('mongoose');
const server = "mongodb+srv://root:alpine@easytravel-xd6sb.mongodb.net/test?retryWrites=true";
const database = 'EasyTravel';
const Flight = require('./models/flightModel.js');



class Database {



  constructor() {
    this._connect()
  }

  _connect() {
     mongoose.connect(server, { useNewUrlParser: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
    }
  }

module.exports = new Database()
