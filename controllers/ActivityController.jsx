import express from 'express';
import db from './db/db';
// Set up the express app
const mongoose = require("mongoose")
const app = express();
const router = express.Router();

//MongoDB database
const dbRoute = 2701;
const PORT = 3000;
mongoose.connect(
    dbRoute
);

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"))

db.on("error", console.error.bind(console, "MongoDB connection error:"))

//get data from DB
router.get("/getActivitiesData", (req, res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });

// get all todos
app.get('/activities', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
