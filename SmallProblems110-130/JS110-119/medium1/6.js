console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
/*
input: integer
output: integer (index of first number that has input integer number of digits)

- iterate through fibonacci sequence
  - add each number into an array
- for each number in sequence, if length of number is equal to input integer, return that index

*/

function findFibonacciIndexByLength(num) {
  let fibArray = [1n, 1n];
  while (true) {
    let fibLength = fibArray.length;
    fibArray.push(fibArray[fibLength - 1] + fibArray[fibLength - 2])
    if (String(fibArray[fibLength - 1]).length == num) {
      return BigInt(fibLength);
    }
  }
}