// 7-http_express.js
const express = require('express');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.type('text');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text');
  countStudents(databasePath)
    .then((summary) => {
      res.send(`This is the list of our students\n${summary}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245);

module.exports = app;
