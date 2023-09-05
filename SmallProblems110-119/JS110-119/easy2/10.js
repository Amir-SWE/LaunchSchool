const readline = require('readline-sync');
const currentYear = new Date().getFullYear();

let currentAge = parseInt(readline.question('What is your age? '));
let retireAge = parseInt(readline.question('At what age would you like to retire? '));
let ageDifference = retireAge - currentAge;

console.log(`It's ${currentYear}. You will retire in ${currentYear + ageDifference}.`);
console.log(`You only have ${ageDifference} years of work to go!`);