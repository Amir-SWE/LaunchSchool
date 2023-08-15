// ** Problem **
// Write a function that takes a string consisting of zero or more space separated
// words and returns an object that shows the number of words of different sizes.
// Words consist of any sequence of non-space characters.

// input: string
// output: object containing quantity of each word length

// ** Examples **
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

// ** Data & Algorithm **
// 1. split string into words array 
// 1a. create empty results object
// 2. iterate through array and count length of each word
// 3. if length of that word exists as a key, add 1 to the key value
// 4. otherwise create key of word length with value 1
// 5. return object

function wordSizes(str) {
  if (str === '') return {};

  strArray = str.split(' ');
  sizeObj = {};

  strArray.forEach(word => {
    if (sizeObj.hasOwnProperty(word.length)) {
      sizeObj[word.length] += 1;
    } else {
      sizeObj[word.length] = 1;
    }
  })

  return sizeObj;
}

