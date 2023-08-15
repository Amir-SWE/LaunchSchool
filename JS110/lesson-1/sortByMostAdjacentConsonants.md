---- PEDAC ----

** Problem **
Input: array of strings
Output: New array of strings sorted by highest adjacent consonants

Explicit rules:
  - If two strings contain same highest number of adjacent consonants, they should retain original order
  - considered adjacent if next to each other in the same word or space between in adjacent words

Implicit rules:
  - Don't mutate original array
  - Single consonants in a string do not affect sort order in comparison to strings with no consonants. Only adjacent consonants affect sort order.

Questions: 
- What about special characters?
- What about multiple spaces?
- Upper case and lower case letters?



** Examples **
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']



** Data Structure **
- arrays
- sort arrays

** Algorithm **
- Create new empty result array
- Find highest adjacent consonant for each string in the array
    1. split consonant into array
    2. initialize counter
    3. iterate through array elements
      - starting at 0, until length of array, count by 1
    4. if element is consonant, add one to counter
    5. if element is space, skip to next iteration
    6. if element is not consonant, save counter value to max value and reset counter

- Sort array based on highest adjacent consonant

- Return array
