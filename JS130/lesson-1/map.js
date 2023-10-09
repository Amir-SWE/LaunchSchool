// function map(array, callback) {
//   let mappedArray = [];
//   for (let index = 0; index < array.length; index++) {
//     mappedArray.push(callback(array[index]));
//   }
//   return mappedArray;
// }

function map(array, callback) {
  return array.reduce((acc, items) => {
    acc.push(callback(items));
    return acc;
  }, [])
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]