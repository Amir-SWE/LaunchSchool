let array = [3, 5, 7];

function sumOfSquares(array) {
  let sum = array.reduce((acc, element) => acc + element * element, 0);
  return sum;
}

console.log(sumOfSquares(array)); // => 83