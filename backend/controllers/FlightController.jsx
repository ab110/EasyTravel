import express from 'express';
import db from './db/db';
// Set up the express app

const app = express();

// get all todos
app.get('/flights/getTest', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
