console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

// No need to .resume(); Node starts reading when listeners are attached
process.stdin.on('data', (data) => {
    // Keep the newline from stdin so the output matches exactly:
    // "Your name is: Sam\n"
    process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
    console.log('This important software is now closing');
});
