class Scrabble {
  constructor(word) {
    if (typeof word !== 'string') {
      this.word = '';
    } else {
      this.word = word.trim().toLowerCase();
    }
  }

  static VALUES = {
    aeioulnrst: 1,
    dg: 2,
    bcmp: 3,
    fhvwy: 4,
    k: 5,
    jx: 8,
    qz: 10,
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    let sum = 0;
    for (let index = 0; index < this.word.length; index++) {
      sum += this.scoreForLetter(this.word[index]);
    }
    return sum;
  }

  scoreForLetter(letter) {
    for (const key in Scrabble.VALUES) {
      if (key.includes(letter)) {
        return Scrabble.VALUES[key];
      }
    }
  }
}



/*
CABBAGE

- initialize sum variable and set to 0
- go through word letter by letter
- for each letter add corresponding score to sum
- return sum
*/

module.exports = Scrabble;