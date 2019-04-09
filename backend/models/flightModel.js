// import npm modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// build user schema
  const FlightSchema = new Schema({
      id: String,
      name: String,
      time: String,
      price: String
    },
    {
      collection: 'flights'
    }
  );



module.exports = exports = mongoose.model('Flight', FlightSchema); // export model for use
