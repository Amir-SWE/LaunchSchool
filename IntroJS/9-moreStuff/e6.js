let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words,match) {
  let resultArray = []
  words.forEach(function(word) {
    if (match.test(word)) {
      resultArray.push(word)
    }
  })

  return resultArray
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']