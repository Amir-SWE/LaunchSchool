const readline = require('readline-sync');

console.log('What is the bill?');
let bill = parseFloat(readline.prompt());

console.log('What is the tip percentage?');
let tipPercentage = parseFloat(readline.prompt());

let tip = (tipPercentage / 100) * bill;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);