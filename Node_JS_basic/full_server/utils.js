import { promises as fs } from 'fs';

async function readDatabase(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.split('\n').slice(1);
        const groups = { CS: [], SWE: [] };
        for (const line of lines) {
            if (line.trim() !== '') {
                const fields = line.split(',');
                const firstname = fields[0];
                const field = fields[3];
                if (field in groups) {
                    groups[field].push(firstname);
                }
            }
        }
        return groups;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

export default readDatabase;