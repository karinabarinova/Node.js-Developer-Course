const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.version('1.1.0');
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log(`Title: ${argv.title}\nBody: ${argv.body}`);
    }
})
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    handler: function() {
        console.log('Removing a note');
    }
})
yargs.command({
    command: 'list',
    description: 'List your notes',
    handler: function() {
        console.log("Listing out all notes");
    }
})
yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function() {
        console.log("Reading a note");
    }
})

yargs.parse();
// console.log(yargs.argv);