// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    // Drop empty lines and the header
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const records = lines.slice(1);

    // Group first names by field (e.g., CS, SWE)
    const groups = {};
    records.forEach((record) => {
      const parts = record.split(',');
      const firstName = parts[0];
      const field = parts[3];

      if (!groups[field]) groups[field] = [];
      groups[field].push(firstName);
    });

    const total = Object.values(groups).reduce((acc, arr) => acc + arr.length, 0);
    console.log(`Number of students: ${total}`);

    Object.entries(groups).forEach(([field, list]) => {
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
