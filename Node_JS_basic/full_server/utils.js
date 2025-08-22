// full_server/utils.js
import { promises as fs } from 'fs';

/**
 * readDatabase(filePath)
 * Reads CSV and returns an object: { FIELD: [firstNames...] }
 * Rejects if the file cannot be read.
 */
export default async function readDatabase(filePath) {
    if (!filePath) {
        throw new Error('Cannot load the database');
    }

    const data = await fs.readFile(filePath, 'utf8');

    const lines = data.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length <= 1) {
        return {};
    }

    const records = lines.slice(1);
    const byField = {};

    for (const row of records) {
        const parts = row.split(',');
        if (parts.length >= 4) {
            const firstName = parts[0].trim();
            const field = parts[3].trim();
            if (!byField[field]) {
                byField[field] = [];
            }
            byField[field].push(firstName);
        }
    }

    return byField;
}
