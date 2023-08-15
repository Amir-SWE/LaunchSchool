// User inputs: loanAmount, apr, loanDurationInYears
// Calculated values: monthlyInterestRate, loanDuarationInMonths
// Output: Monthly payment

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to Mortgage / Car Loan Calculator!');

// Get inputs
prompt('What is the total loan amount?');
let loanAmount = parseFloat(readline.question());

prompt('What is the annual percentage rate? (APR)');
let apr = parseFloat(readline.question()) / 100;

prompt('What is the loan duration in years?');
let loanDurationInYears = parseFloat(readline.question());

// Calculate intermediate values
let monthlyInterestRate = apr / 12;
let loanDuarationInMonths = loanDurationInYears * 12;

// Calculate monthly payment
let monthlyPayment = loanAmount *
  (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate),
    (-loanDuarationInMonths))));

// Output monthly payment
prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);