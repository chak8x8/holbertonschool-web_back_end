const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').slice(1);
    const groups = { CS: [], SWE: [] };

    for (const line of lines) {
      if (line.trim() !== '') {
        const fields = line.split(',');
        const firstname = fields[0];
        const field = fields[3];
        groups[field].push(firstname);
      }
    }

    const total = groups.CS.length + groups.SWE.length;
    console.log(`Number of students: ${total}`);

    for (const field in groups) {
      if (groups[field].length > 0) {
        console.log(
          `Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
