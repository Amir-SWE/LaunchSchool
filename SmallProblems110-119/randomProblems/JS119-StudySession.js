// Given the string of alphabetic characters limited to a-z, do as in the sample cases.

// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a hyphen in the returned string.
// In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"












// Find the length of the longest substring in the given string that is a palindrome.

// As an example, if the input was "I like racecars that go fast",
// the substring's ("racecar") length would be 7.

// If the length of the input string is 0, the return value must be 0.

console.log(longestPalindrome("a") == 1);
console.log(longestPalindrome("aa") === 2);
console.log(longestPalindrome("baa") === 2);
console.log(longestPalindrome("aab") === 2);
console.log(longestPalindrome("baabcd") === 4);
console.log(longestPalindrome("baablkj12345432133d") === 9);








// explain output
let arr1 = ["a", "b", "c"];
let arr2 = arr1.map((letter, idx) => arr1.unshift(idx));
console.log(arr1); 
console.log(arr2);








// explain output
let arr1 = ["a", "b", "c"];
let arr2 = arr1.map((letter, idx) => {
  arr1.unshift(idx);
  return letter;
});
console.log(arr1); 
console.log(arr2); 









// explain line by line
let players = [["Joe", 25], ["Andy", 31], ["Ralph", 18], ["Mark", 28]];

let lastYearsTeam = players
  .slice() 
  .sort() 
  .filter(player => {
    if (player[1] < 30) return true;
  });

players.splice(2, 1);
players.forEach(player => player[1] += 1);

console.log(players);
console.log(lastYearsTeam);




