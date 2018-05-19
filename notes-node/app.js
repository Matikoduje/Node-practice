const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;
var command = argv._[0];

const notes = require('./notes');

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
}
else if (command === 'list') {
    notes.getAll;
}
else if (command === 'remove') {
    notes.removeNote(argv.title);
}
else if (command === 'read') {
    notes.readNote(argv.title);
}
else {
    console.log('Command not recognize');
}
