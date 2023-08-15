// User input: Integer greater than 1, sum or product
// Output: Sum or product of integers between 1 and user input

// get number and p/s
// loop from 1 to selected number
// if p: multiply each iteration, if s: sum each iteration to previous

const readline = require('readline-sync');

let userInteger = parseInt(readline.question('Please enter an integer greater than 0: '));
while (isNaN(userInteger) || (userInteger <= 0)) {
  userInteger = readline.question("That's not a valid input\nPlease enter an integer greater than 0: ")
}

let sumOrProduct = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');
while ((sumOrProduct !== 's') && (sumOrProduct !== 'p')) {
  sumOrProduct = readline.question("That's not a valid input\nEnter 's' to compute the sum, or 'p' to compute the product: ")
}


if (sumOrProduct === 's') {
  let total = 0;
  for (let i = 1; i <= userInteger; i++) {
    total += i;
  }
  console.log(`The sum of the integers between 1 and ${userInteger} is ${total}.`)
}

if (sumOrProduct === 'p') {
  let total = 1;
  for (let i = 1; i <= userInteger; i++) {
    total *= i;
  }
  console.log(`The product of the integers between 1 and ${userInteger} is ${total}.`)
}

