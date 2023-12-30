class Diamond {
  static alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  static makeDiamond(letter) {
    let indexOfLetter = Diamond.alphabet.indexOf(letter);

    let firstLine = 'A';

    if (letter === 'A') {
      return firstLine + '\n';
    } else {
      firstLine = ' '.repeat(indexOfLetter) + 'A' + ' '.repeat(indexOfLetter);
    }

    let diamond = firstLine;

    let middleSpace = 1;
    let letterIndex = 1

    for (let pos = indexOfLetter - 1; pos >= 0; pos--) {
      diamond += '\n' + ' '.repeat(pos) + Diamond.alphabet[letterIndex] + 
                 ' '.repeat(middleSpace) + Diamond.alphabet[letterIndex] +
                 ' '.repeat(pos);

      middleSpace += 2;
      letterIndex += 1;
    }

    middleSpace -= 4;
    letterIndex -= 2;

    for (let pos = 1; pos < indexOfLetter; pos++) {
      diamond += '\n' + ' '.repeat(pos) + Diamond.alphabet[letterIndex] + 
                 ' '.repeat(middleSpace) + Diamond.alphabet[letterIndex] +
                 ' '.repeat(pos); 
    
      middleSpace -= 2;
      letterIndex -= 1;
    }

    diamond += '\n' + firstLine;

    return diamond + '\n';
  }
}

console.log(Diamond.makeDiamond('G'));

/*
[A, B, C, D, E]
[0, 1, 2, 3, 4]

for E:

first line: 
  4 spaces, A, 4 spaces

second line:
  3 space, B, 1 space, B, 3 space

third line:
  2 spaces, C, 3 space, C, 2 spaces

4th line:
  1 space, D, 5 spaces, D, 1 space

Middle line: 
  E, 7 spaces, E

initialize letter index = 1
initialize middle space index = 1

for loop from index of the letter position (array) - 1 to 1, decrement by 1
  - add to string: `${' '.repeat(index) + 
    alphabet[letter index] + ' '.repeat(middlespace index) + alphabet[letter index]
    + ' '.repeat(index)}

letter index + 1;
middle space index + 2;

*/

module.exports = Diamond;