const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by Node.js!\n');
fs.appendFileSync('append.txt', 'This text was added by appendFileSync()\n');
fs.appendFileSync('append.txt', 'Previous text was not overwritten');
fs.appendFileSync('notes.txt', 'This string is the result of appendFileSync()');
