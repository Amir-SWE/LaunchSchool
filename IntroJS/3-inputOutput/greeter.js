let rlSync = require('readline-sync');

let firstName = rlSync.question('What is your first name?\n');
let lastName = rlSync.question('What is your last name?\n');

let addNames = (first, last) => `${first} ${last}`;

console.log(`Hello, ${addNames(firstName, lastName)}!`);