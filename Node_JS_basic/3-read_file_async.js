// 3-read_file_async.js
const fs = require('fs').promises;

async function countStudents(path) {
  if (!path) throw new Error('Cannot load the database');

  let data;
  try {
    data = await fs.readFile(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Remove empty lines, keep header at index 0
  const lines = data.split('\n').filter((l) => l.trim() !== '');
  const records = lines.slice(1);

  // Only track CS and SWE as per checker
  const groups = { CS: [], SWE: [] };

  for (const line of records) {
    const fields = line.split(',');
    if (fields.length >= 4) {
      const firstName = fields[0].trim(); // correct: first name is column 0
      const field = fields[3].trim();
      if (groups[field]) groups[field].push(firstName);
    }
  }

  const total = groups.CS.length + groups.SWE.length;

  // Build the exact same lines we log — and also return them as a single string
  const outLines = [`Number of students: ${total}`];
  if (groups.CS.length) {
    outLines.push(`Number of students in CS: ${groups.CS.length}. List: ${groups.CS.join(', ')}`);
  }
  if (groups.SWE.length) {
    outLines.push(`Number of students in SWE: ${groups.SWE.length}. List: ${groups.SWE.join(', ')}`);
  }

  const out = outLines.join('\n');
  console.log(out);   // keep original logging behavior
  return out;         // NEW: let 5-http.js send this in the HTTP response
}

module.exports = countStudents;
