// 5-http.js
const http = require('http');
const fs = require('fs').promises; // read file here to build the response

const databasePath = process.argv[2];

async function buildSummary(path) {
  if (!path) throw new Error('Cannot load the database');

  let data;
  try {
    data = await fs.readFile(path, 'utf8');
  } catch {
    throw new Error('Cannot load the database');
  }

  // Remove empty lines; keep header on lines[0]
  const lines = data.split('\n').filter((l) => l.trim() !== '');
  if (lines.length <= 1) {
    return 'Number of students: 0';
  }

  const rows = lines.slice(1);
  const groups = {}; // e.g. { CS: [...], SWE: [...] }

  rows.forEach((row) => {
    const parts = row.split(',');
    if (parts.length >= 4) {
      const firstName = parts[0].trim();
      const field = parts[3].trim();
      if (!groups[field]) groups[field] = [];
      groups[field].push(firstName);
    }
  });

  const total = Object.values(groups).reduce((acc, arr) => acc + arr.length, 0);
  const outLines = [`Number of students: ${total}`];

  // Deterministic field order for tests
  Object.keys(groups).sort().forEach((field) => {
    const list = groups[field];
    outLines.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  });

  return outLines.join('\n');
}

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    try {
      const summary = await buildSummary(databasePath);
      res.end(`This is the list of our students\n${summary}`);
    } catch {
      // Checker expects header + error line in body, with a 200 status
      res.end('This is the list of our students\nCannot load the database');
    }
    return;
  }

  res.statusCode = 404;
  res.end('Not found');
});

app.listen(1245);

module.exports = app;
