// Find the length of the longest substring in the given string that is a palindrome.

// As an example, if the input was "I like racecars that go fast",
// the substring's ("racecar") length would be 7.

// If the length of the input string is 0, the return value must be 0.

/*
input: string
output: number -> length of longest substring that is a palindrome

palindrome -> word that is spelled the same forwards and backwards
*can be one character
*numbers included

"baabcd" -> 
- iterate through all substrings
- if the substring is a palindrome, add it to another array
- find the longest element of that array
- return length

"baabcd" -> 
- b, ba, baa, baab, baabc, baabcd
- a, aa, aab, aabc, aabcd

Algorithm:
- initialize palindrome array
- Iterate through all substrings
  - outer loop iterate from index 0 to length of array, incrementing by 1
    - inner loop would iterate from index 1 to length of array, incrementing by 1
      - get the substring for current iteration (string.slice(outer, inner))
- if substring is a palindrome, add to palindrome array
  - make isPalindrome function
  - split word into array, reverse, and check if it is the same word
- find longest word in palindrome array
  - map the length of each character into new array
  - Math.max to find longest
- return that length
*/

function longestPalindrome(str) {
  if (str.length === 0) return 0;
  let palindromeArr = [];
  for (let outer = 0; outer < str.length; outer++) {
    for (let inner = outer + 1; inner <= str.length; inner++) {
      let substr = str.slice(outer, inner);
      if (isPalindrome(substr)) {
        palindromeArr.push(substr);
      }
    }
  }
  let lengthArr = palindromeArr.map(pal => pal.length);
  return Math.max(...lengthArr);
}

function isPalindrome(word) {
  return word.split('').reverse().join('') === word;
}

console.log(longestPalindrome("a") == 1);
console.log(longestPalindrome("aa") === 2);
console.log(longestPalindrome("baa") === 2);
console.log(longestPalindrome("aab") === 2);
console.log(longestPalindrome("baabcd") === 4);
console.log(longestPalindrome("baablkj12345432133d") === 9);