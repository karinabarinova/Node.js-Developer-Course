const yargs = require('yargs');
const notes = require('./notes');

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
        notes.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            title: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
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