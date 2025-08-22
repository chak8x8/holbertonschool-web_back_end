// full_server/utils.js
import { promises as fs } from 'fs';

/**
 * readDatabase(filePath)
 * Reads a CSV file and returns an object mapping field -> array of first names.
 * Rejects if the file is not accessible.
 *
 * Expected CSV columns (by task convention):
 *   0: firstname, 1: lastname, 2: age, 3: field (e.g., CS or SWE)
 */
export default async function readDatabase(filePath) {
  if (!filePath) {
    throw new Error('Cannot load the database');
  }

  let data;
  try {
    data = await fs.readFile(filePath, 'utf8');
  } catch (err) {
    // Reject with the original error as required
    throw err;
  }

  const lines = data.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length <= 1) {
    // Only header or empty
    return {};
  }

  const records = lines.slice(1);
  const byField = {}; // { CS: [firstNames...], SWE: [firstNames...], ... }

  for (const row of records) {
    const parts = row.split(',');
    if (parts.length >= 4) {
      const firstName = parts[0].trim();
      const field = parts[3].trim();
      if (!byField[field]) byField[field] = [];
      byField[field].push(firstName);
    }
  }

  return byField;
}
