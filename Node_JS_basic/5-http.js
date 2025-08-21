// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    countStudents(databasePath)
      .then((summary) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${summary}`);
      })
      .catch(() => {
        // Spec expects 200 with header + error line
        res.statusCode = 200;
        res.end('This is the list of our students\nCannot load the database');
      });
    return;
  }

  res.statusCode = 404;
  res.end('Not found');
});

app.listen(1245);

module.exports = app;
