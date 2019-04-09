// import npm modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// build user schema
  const FlightSchema = new Schema({
      id: Number,
      name: String,
      price: Number,
      time: String
    },
    {
      collection: 'flights'
    }
  );



module.exports = exports = mongoose.model("Flight", FlightSchema, "Flight"); // export model for use
