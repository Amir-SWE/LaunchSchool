// You have to create a function that takes a positive integer number and returns 
// the next bigger number formed by the same digits:

/*
input: positive integer
output: integer

Rules:
  - take an integer number and return next bigger number that can be made with the same digits
  - return -1 if no bigger number can be made

Test Cases:
12 -> 21
12 -> [12, 21];

513 -> 531
513 -> [135, 153, 315, 351, 513, 531]

577 -> 757

111 -> -1

2017 -> 2071

Data Strucure (arrays) / Algorithm:

- if it's a single digit number, return -1
  - number to string -> string to array of digits
  - iterate through array backwards (let i = array.length - 1; i > 1; i--)
  - swap second to last and last digit
    - swap element i with element i - 1
  - turn array back into string back into number
  - if number is greater than input number, return it
- return -1
*/

console.log(nextBiggerNum(9) === -1); // true
console.log(nextBiggerNum(12) === 21); // true
console.log(nextBiggerNum(513) === 531); // true
console.log(nextBiggerNum(2017) === 2071); // true
console.log(nextBiggerNum(111) === -1); // true
console.log(nextBiggerNum(531) === -1); // true
console.log(nextBiggerNum(123456789) === 123456798); // true

function nextBiggerNum(n) {
  if (n < 10) return -1;
  let digitsArr = String(n).split('');
  for (let i = digitsArr.length - 1; i >= 1; i--) {
    let digitsArrCopy = digitsArr.slice();
    let lastDigit = digitsArrCopy[i];
    digitsArrCopy[i] = digitsArrCopy[i - 1];
    digitsArrCopy[i - 1] = lastDigit;
    let currentN = Number(digitsArrCopy.join(''));
    if ( currentN > n) {
      return currentN;
    }
  }
  return -1;
}

