const fs = require('fs');

var addNote = (title, body) => {
    var newNote = {
        title, body
    };

    fs.writeFileSync('./notes.txt', JSON.stringify(newNote));
}

var getAll = () => {
    console.log('All notes:', title); 
}

var removeNote = (title) => {
    console.log('Remove note:', title); 
}

var readNote = (title) => {
    console.log('Read note:', title); 
}

module.exports = {
    addNote, readNote, removeNote, getAll
}