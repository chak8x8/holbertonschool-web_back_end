// 3-read_file_async.js
const fs = require('fs').promises;

async function countStudents(path) {
  if (!path) throw new Error('Cannot load the database');

  let data;
  try {
    data = await fs.readFile(path, 'utf8');
  } catch {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((l) => l.trim() !== '');
  if (lines.length <= 1) {
    const out = 'Number of students: 0';
    console.log(out);
    return out;
  }

  const rows = lines.slice(1);
  const groups = {};
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

  // Deterministic order (CS then SWE if both exist)
  Object.keys(groups).sort().forEach((field) => {
    const list = groups[field];
    outLines.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  });

  const out = outLines.join('\n');
  console.log(out);
  return out;
}

module.exports = countStudents;
