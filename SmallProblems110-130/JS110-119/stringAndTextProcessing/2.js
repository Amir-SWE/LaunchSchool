console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

function removeVowels(arr) {
  return arr.map(word => removeVowelsFromWord(word));
}

function removeVowelsFromWord(str) {
  return str.split('').filter(char => !'aioue'.includes(char.toLowerCase())).join('');
}