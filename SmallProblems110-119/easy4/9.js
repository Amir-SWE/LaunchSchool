// input: string of a number
// output: number contained in the string

// 1. split string into characters
// 2. convert each character to number 0-10
// 3. join array elements to get number
//    - [2, 1] => 20 + 1  
//    - [5,7,1] => 500 + 70 + 1
//    - [4, 3, 2, 1] => 4*(10)^3 + 3*(10)^2
//    - n* 10^(array.length - 1 - index)

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function stringToInteger(str) {
  let charArray = str.split('');
  let numberArray = charArray.map(char => charToInteger(char));
  return numberArrayToNumber(numberArray);
}

function numberArrayToNumber(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i] * (10**(arr.length - 1 - i));
  }
  return total;
}

function charToInteger(char) {
  switch (char) {
    case '0': return 0;
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    case '4': return 4;
    case '5': return 5;
    case '6': return 6;
    case '7': return 7;
    case '8': return 8;
    case '9': return 9;
    default: return 0;
  }
}