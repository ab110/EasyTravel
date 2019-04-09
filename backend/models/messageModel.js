// import npm modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// build user schema
  const MessageSchema = new Schema({
      id: Number,
      content: String
    }
  );



module.exports = exports = mongoose.model("Message", MessageSchema, "Message"); // export model for use
