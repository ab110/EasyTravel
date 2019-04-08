const express = require('express');
const app = express();
var routes = require("./routes/routes.js");
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const API_PORT = 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

// this is our MongoDB database
const dbRoute = "mongodb+srv://root:alpine@easytravel-xd6sb.mongodb.net/test?retryWrites=true";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
