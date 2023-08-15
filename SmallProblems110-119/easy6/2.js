function isConsonant(char) {
  let vowels = ['a','o','i','u','e'];
  return (char >= 'a' && char <= 'z' && !vowels.includes(char));
}

function doubleConsonants(str) {
  return str.split('').map(char => 
    isConsonant(char.toLowerCase()) ? char + char : char).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""