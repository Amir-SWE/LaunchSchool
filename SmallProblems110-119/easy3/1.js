function crunch(str) {
  strArray = str.split('');
  resultsArray = [strArray[0]];
  for (let i = 1; i < strArray.length; i++) {
    if (strArray[i] !== resultsArray[resultsArray.length - 1]) {
      resultsArray.push(strArray[i]);
    }
  }
  return resultsArray.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""