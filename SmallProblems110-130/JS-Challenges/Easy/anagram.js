class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(array) {
    return array.filter(word => this.isAnagram(word));
  }

  isAnagram(testWord) {
    let word2 = testWord.toLowerCase();

    if (this.word.length !== word2.length) {
      return false;
    } else if (this.word === word2) {
      return false;
    }

    let sorted1 = this.word.split('').sort().join('');
    let sorted2 = word2.split('').sort().join('');

    if (sorted1 === sorted2) {
      return true;
    } else {
      return false
    }

  }

  // is an anagram (case insensitive) if:
  // 1. same length
  // 2. uses same letters, non-repeating
}

let detector = new Anagram('ant');
detector.isAnagram('tan');

module.exports = Anagram;