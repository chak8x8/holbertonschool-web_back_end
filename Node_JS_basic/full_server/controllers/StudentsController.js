// full_server/controllers/StudentsController.js
import readDatabase from '../utils';

class StudentsController {
    static async getAllStudents(req, res) {
        res.type('text');
        const dbPath = process.argv[2];

        try {
            const byField = await readDatabase(dbPath);

            // keep lines short and readable
            const cmp = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());
            const fields = Object.keys(byField).sort(cmp);

            const lines = ['This is the list of our students'];
            fields.forEach((field) => {
                const list = byField[field] || [];
                const listStr = list.join(', ');
                const line = `Number of students in ${field}: ${list.length}. List: ${listStr}`;
                lines.push(line);
            });

            res.status(200).send(lines.join('\n'));
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        res.type('text');
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        const dbPath = process.argv[2];

        try {
            const byField = await readDatabase(dbPath);
            const list = byField[major] || [];
            res.status(200).send(`List: ${list.join(', ')}`);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;
