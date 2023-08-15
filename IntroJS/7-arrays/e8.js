let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let newArray = array.reduce((acc, element) => {
    if (element.length % 2 === 1) {
      return acc.concat(element.length);
    } 

    return acc;

  }, [])

  return newArray;
}

console.log(oddLengths(arr)); // => [1, 5, 3]