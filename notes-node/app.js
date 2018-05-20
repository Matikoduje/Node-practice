const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const argv = yargs
  .command('add', 'Add a new note', {
     title: titleOptions,
     body: {
       describe: 'Body of title',
       demand: true,
       alias: 'b'
     }
  })
  .command('list', 'Load all notes')
  .command('read', 'Load a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,
  })
  .help()
  .argv;
var command = argv._[0];

const notes = require('./notes');

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`New note added`);
        notes.noteInfo(note);
    } else {
        console.log('Note is not added.');
    }
}
else if (command === 'list') {
    var allNotes = notes.getAll();

    allNotes.forEach((note) => notes.noteInfo(note));
}
else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note was not found';
    console.log(message);
}
else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note) {
        notes.noteInfo(note);
    } else {
        console.log('Note was not found');
    }
}
else {
    console.log('Command not recognize');
}
