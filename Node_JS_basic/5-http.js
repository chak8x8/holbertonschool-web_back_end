const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv.slice(2);

const app = http.createServer(async (res, req) => {
    res.setHeader('Content-Type', 'text/plain');
    if (res.url === '/') {
        res.write('Hello Holberton School!');
        res.end();
    } else if (res.url === '/students') {
        res.write('This is the list of our students\n');
        try {
            await countStudents(databasePath);
            res.end()
        } catch (error) {
            res.write('Cannot load the database');
            res.end();
        }
    }
})

app.listen(1245);

module.exports = app;
