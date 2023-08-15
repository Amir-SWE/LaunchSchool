// Using the forEach method, write some code to output all vowels from the strings in the arrays.
// object.values
// nested foreach
// console.log all vowels

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

function allVowels(str) {
  return str.split('').filter(char => 'aeoiu'.includes(char)).join('');
}

Object.values(obj).forEach(arr => arr.forEach(word => console.log(allVowels(word))));