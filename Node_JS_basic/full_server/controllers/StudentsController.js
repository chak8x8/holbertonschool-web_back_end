import readDatabase from '../utils';

class StudentsController {
    static getAllStudents(req, res) {
        res.set('Content-Type', 'text/plain');
        readDatabase(process.argv[2])
            .then(groups => {
                const output = ['This is the list of our students'];
                const total = groups.CS.length + groups.SWE.length;
                output.push(`Number of students: ${total}`);
                for (const field in groups) {
                    if (groups[field].length > 0) {
                        output.push(`Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`);
                    }
                }
                res.send(output.join('\n')); // Single send
            })
            .catch(() => {
                res.send('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }
        readDatabase(process.argv[2])
            .then(groups => {
                res.set('Content-Type', 'text/plain');
                res.send(`List: ${groups[major].join(', ')}`);
            })
            .catch(() => {
                res.send('Cannot load the database');
            });
    }
}

export default StudentsController;