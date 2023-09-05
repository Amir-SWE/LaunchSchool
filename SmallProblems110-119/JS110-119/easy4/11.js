// input: integer
// output: string form of integer

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
console.log(integerToString(5));           // "1"

function integerToString(int) {
  if (int === 0) return '0';
  let arr = integerToArray(int);
  return arr.reduce((str, num) => str + num, '');
}

function integerToArray(int) {
  let arr = [];
  let factor = 10;
  while (int !== 0) {
    arr.unshift(int % factor);
    int = Math.floor(int/10);
  }
  return arr;
}