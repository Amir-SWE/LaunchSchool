let rlSync = require('readline-sync');

function multiply() {
  let a = rlSync.question('Enter the first number: ')
  let b = rlSync.question('Enter the second number: ')
  console.log(`${a} + ${b} = ${a * b}`)
}

multiply()