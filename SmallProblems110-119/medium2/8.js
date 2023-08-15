/*
input: string
output: longest sentence (by words) in the string

- initialize sentence array
- split string into sentences (sentence ends with '.', '!', '?') and add into array
  - set start index to 0
  - iterate through every character in string
  - if it is one of the three sentence ending characters:
    - add substring from starting index to current index + 1 (str.slice(startingIndex, index + 1))
    - set starting index to current index
- find the array element with longest sentence (most words)
  - map number of words for each sentence
  - find index of maximum number in that array
- return element at above index from sentence array
*/

function longestSentence(str) {
  let sentenceArray = [];
  let startIndex = 0;
  for (let index = 0; index < str.length; index++) {
    if (['.', '!', '?'].includes(str[index])) {
      sentenceArray.push(str.slice(startIndex, index + 1));
      startIndex = index + 1;
    }
  }
  let wordsLengthArray = sentenceArray.map(sentence => {
    return sentence.trim().split(' ').length;
  })
  
  let maxWords = Math.max(...wordsLengthArray);
  console.log(sentenceArray[wordsLengthArray.indexOf(maxWords)]);
  console.log(`The longest word has ${maxWords} words.`);
}


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.