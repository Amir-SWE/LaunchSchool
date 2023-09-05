/*
input: string
output: array of strings

Rules:
- return a list of substrings of input string
- Each substring should begin with the first letter of the word, 
and the list should be ordered from shortest to longest.

'abc' => ['a', 'ab', 'abc']

DS/Algorithm: (array)
- initialize results array
- iterate through string
  - for loop
- get substring up to iteration index
  - substring
- add that substring to results array
  - arr.push(substring)
- return results array
*/

function leadingSubstrings(str) {
  let substringArray = []
  for (index = 1; index <= str.length; index++) {
    substringArray.push(str.substring(0, index));
  }
  return substringArray;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]