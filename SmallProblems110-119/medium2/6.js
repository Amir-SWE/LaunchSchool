console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

/*
input: integer
output: square of sums - sum of squares

3 -> [1, 2, 3]
(1 + 2 + 3)** 2 -
(1**2 + 2**2 + 3**2)

Algorithm:
- make an array of all integers up to and including input integer starting from 1
  - initialize empty array
  - iterate from index 1 to index less than or equal to (input number)
    - during each iteration, add index to array

- calculate square of sums of array
  - calculate sum of all elements (array.reduce())
  - square the sum

- calculate sum of squares of array
  - calculate square of each array element (array.map())
  - calculate sum of all elements (array.reduce())

- calculate difference between two values
- return the difference
*/

function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function sumSquareDifference(num) {
  let numArray = [];
  for (let index = 1; index <= num; index++) {
    numArray.push(index);
  }
  
  let squareOfSums = sumOfArray(numArray) ** 2;
  let sumOfSquares = sumOfArray(numArray.map(num => num ** 2));

  return squareOfSums - sumOfSquares;
}

