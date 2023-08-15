// new object to hold result
// iterate through string by character
// skip spaces
// if character has a key in the created object, add 1 to value
// else create new key value pair in the object (key is character, value is 1)

let statement = "The Flintstones Rock";

let letterFrequency = {};

statement.split('').forEach(letter => {
  if (letter === ' ') return;

  if (letterFrequency.hasOwnProperty(letter)) {
    letterFrequency[letter] += 1;
  } else {
    letterFrequency[letter] = 1;
  }
})

console.log(letterFrequency);

