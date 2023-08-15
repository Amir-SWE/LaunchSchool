// Given the following data structure, return a new array with the same structure, 
// but with the values in each subarray ordered -- alphabetically or 
// numerically as appropriate -- in ascending order.

// arr.map -> arr.sort

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(subArray => subArray.slice().sort((a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }}));

console.log(arr);
console.log(newArr);