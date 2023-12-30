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

function palindromes(str) {
  return substrings(str).filter(str => isPalindrome(str));
}

function isPalindrome(str) {
  if (str.length < 2) return false;
  return str === str.split('').reverse().join('');
}

// nittin -> slice(0,length/2) === slice(Math.ceil(length/2))



console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]