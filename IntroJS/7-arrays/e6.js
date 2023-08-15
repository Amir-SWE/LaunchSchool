let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let lengthArray = array.map(string => string.length)
  return lengthArray.filter(n => n % 2 !== 0)
}

console.log(oddLengths(arr)); // => [1, 5, 3]