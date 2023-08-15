let rlSync = require('readline-sync');

let n1 = rlSync.question('Enter the first number\n');
let n2 = rlSync.question('Enter the second number\n');
let sum = Number(n1) + Number(n2);

console.log(`The numbers ${n1} and ${n2} add to ${sum}`);