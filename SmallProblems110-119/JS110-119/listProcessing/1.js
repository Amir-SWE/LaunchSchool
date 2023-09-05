console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

/*
- turn number into string
- split string into characters array
- map array to turn each character into number
- use reduce to sum all the numbers in the array
- return the sum
*/

function sum(num) {
  return String(num).split('').map(digit => Number(digit))
    .reduce((sum, digit) => sum + digit);
}