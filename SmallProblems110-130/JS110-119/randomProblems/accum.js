// Given the string of alphabetic characters limited to a-z, do as in the sample cases.

// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a hyphen in the returned string.
// In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

/*
input: string
output: string

1. Reapting each character based on its index + 1
2. Capitalize each segment
"abcd" -> a-bb-ccc-dddd -> A-Bb-Ccc-Dddd

Algorithm:
1. split string into array of characters
2. for each character, transform into resulting string
  - map each character based on its index
  - the return value should be capitalized letter + string.repeat(index)
3. join array with hyphens
4. return joined array as a string

*/

function accum(str) {
  let strArray = str.split('');
  let mappedArray = strArray.map((char, index) => {
    return char.toUpperCase() + char.repeat(index);
  })
  return mappedArray.join('-')
}


// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

