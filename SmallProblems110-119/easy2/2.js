const readline = require('readline-sync');

let name = readline.question('What is your name? ')

console.log(name[name.length - 1] === '!' ? 
  `HELLO ${name.toUpperCase().slice(0,name.length - 1)}. WHY ARE WE SCREAMING?` :
  `Hello ${name}.`
);