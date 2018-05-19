console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

var filteredArray = [1,2,3,1,2,3,4,1];
console.log(_.uniq(filteredArray));
// console.log(_.isString(true));
// console.log(_.isString('dadada'));

// var res = notes.addNote();
// var sum = notes.add(9, 17);
// console.log(sum);

// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username} !`, (err) => {
//     if (err) {
//         console.log('Unable to write!');
//     }
// });