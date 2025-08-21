const express = require('express');
const countStudents = require('./3-read_file_async');
const databasePath = process.argv[2];

const app = express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    try {
        const summary = await countStudents(databasePath);
        res.send(summary);
    } catch (error) {
        res.send('Cannot load the database');
    }
});

app.listen(1245);

module.exports = app;
