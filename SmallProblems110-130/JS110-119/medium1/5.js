let numberWords = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

function wordToDigit(str) {
  let wordsArray = str.split(' ');
  let mappedArray = wordsArray.map(word => {
    if (numberWords.includes(word) || numberWords.includes(word.slice(0, word.length - 1))) {
      if (numberWords.includes(word)) {
        return numberWords.indexOf(word);
      }
      return numberWords.indexOf(word.slice(0, word.length - 1)) + word[word.length - 1];
    }
    return word;
  })
  return mappedArray.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."