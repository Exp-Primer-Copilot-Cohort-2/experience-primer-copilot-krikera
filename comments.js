// Create web server

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.addComment(comment);
  res.json(comments.getComments());
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});