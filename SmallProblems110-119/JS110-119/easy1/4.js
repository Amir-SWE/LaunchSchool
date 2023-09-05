const readline = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

let length = readline.question('Enter the length of the room in meters:\n');
let width = readline.question('Enter the width of the room in meters:\n');

let squareMeters = length * width;
let squareFeet = squareMeters * SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`);
