// input: string
// output: string with every word's first and last letter swapped

// 1. split string into words 
// 2. for each word swap first and last letter
// -- swap first and last letter: 
//      a. split into array of characters
//      b. save first element to new variable
//      c. replace first element with last element
//      d. replace last element with saved variables
//      e. return joined array as a string
// 3. join words back into one string
// 4. return string

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

function swap(str) {
  let strWords = str.split(' ');

  strWords = strWords.map(word => swapFirstAndLastLetter(word));

  return strWords.join(' ');
}

function swapFirstAndLastLetter(word) {
  let charArray = word.split('');
  let firstLetter = charArray[0];
  charArray[0] = charArray[charArray.length - 1];
  charArray[charArray.length - 1] = firstLetter;
  return charArray.join('');
}