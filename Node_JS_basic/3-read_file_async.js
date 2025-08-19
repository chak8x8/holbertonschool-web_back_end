const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    // Remove empty lines, split rows, drop header
    const lines = data.split('\n').filter((l) => l.trim() !== '');
    const records = lines.slice(1);

    // Group first names by field
    const groups = {};
    records.forEach((row) => {
      const [firstName, , , field] = row.split(',');
      if (!groups[field]) groups[field] = [];
      groups[field].push(firstName);
    });

    const total = Object.values(groups).reduce((acc, arr) => acc + arr.length, 0);
    console.log(`Number of students: ${total}`);

    Object.entries(groups).forEach(([field, list]) => {
      console.log(
        `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`,
      );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
