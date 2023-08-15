function sortStringsByConsonants(arr) {
  arr.sort((a, b) => countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a))
  return arr;
}

function countMaxAdjacentConsonants(str) {
  let strArray = str.split('');
  let consonantCounter = 0;
  let maxAdjacentConsonants = 0;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === ' ') continue;
    if (isConsonant(strArray[i])) { 
      consonantCounter++;
      continue;
    } 
    if (consonantCounter > maxAdjacentConsonants) {
      maxAdjacentConsonants = consonantCounter;
    }
    consonantCounter = 0;
  }
  if (consonantCounter > maxAdjacentConsonants) {
    maxAdjacentConsonants = consonantCounter;
  }
  return maxAdjacentConsonants === 1 ? 0 : maxAdjacentConsonants;
}

function isConsonant(letter){
  switch (letter) {
    case 'a': return false;
    case 'e': return false;
    case 'i': return false;
    case 'o': return false;
    case 'u': return false;
    default: return true;
  }
}




// console.log(countMaxAdjacentConsonants('dddaa')); // 3
// console.log(countMaxAdjacentConsonants('ddd a dfffff')); // 6
// console.log(countMaxAdjacentConsonants('ccaa')); // 2
// console.log(countMaxAdjacentConsonants('baa')); // 0
// console.log(countMaxAdjacentConsonants('aa')); // 0


console.log(sortStringsByConsonants(
  ['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(
  ['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(
  ['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(
  ['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']