const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return [];
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added"));
    } else {
        console.log(chalk.red.inverse("Note title taken"));
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length === notesToKeep.length)
        console.log(chalk.bgRed('No note found'));
    else {
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen('Note removed'))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title));
}

const readNotes = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note) => note.title = title)

    if (foundNote) {
        console.log(chalk.green.bold(foundNote.title));
        console.log(foundNote.body);
    } else {
        console.log(chalk.red('No note found'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};