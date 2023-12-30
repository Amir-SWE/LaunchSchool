/*
input: integer
output: next possible featured integer

featured number:
  - odd number
  - multiple of 7
  - no digit appears twice

Algorithm:
- start from given integer and iterate by 1
- keep iterating until a featured number is found
  - function isFeaturedNumber()
    - return true if:
      - odd number and multiple of 7 and 
        no digit appears twice
        - corce number into string
        - split string into array
        - for each character in array, if it is included in the rest of the array, return false
        - otherwise return true
- once featured number is found, stop iteration and return number
*/

function featured(num) {
  if (num >= 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  }

  let counter = num + 1;
  while (true) {
    if (isFeaturedNumber(counter)) break;
    counter++;
  }
  return counter;
}

function isFeaturedNumber(num) {
  return ((num % 2 === 1) && (num % 7 === 0) && noRepeatingDigits(num));
}

function noRepeatingDigits(num) {
  let numArray = String(num).split('');
  for (let index = 0; index < numArray.length - 1; index++) {
    if (numArray.slice(index + 1).includes(numArray[index])) {
      return false;
    }
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."