const readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter an adjective: ');
let adverb = readline.question('Enter an adverb: ');

console.log(`The ${adjective} ${noun} was extremely disappointing.`);
console.log(`I was expecting to ${adverb} ${verb}.`);
console.log(`However, the ${noun} will always ${verb} ${adverb}`);