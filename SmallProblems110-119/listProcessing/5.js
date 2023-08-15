function leadingSubstrings(str) {
  let substringArray = []
  for (index = 1; index <= str.length; index++) {
    substringArray.push(str.substring(0, index));
  }
  return substringArray;
}

function substrings(str) {
  let substrings = [];
  for (let index = 0; index < str.length; index++) {
    leadingSubstrings(str.substring(index)).forEach(subStr => substrings.push(subStr));
  }
  return substrings;
}



console.log(substrings('abcde'));