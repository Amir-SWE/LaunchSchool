console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

/*
input: array
output: new array with first element being placed last

- if input is not array -> return undefined

Algorithm:
edge cases:
- if not array return undefined
- if one element array, return array

- make a copy of array elements from index 1 to end
- append first element to the new copy
- return new copy
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length <= 1) return array;
  return array.slice(1).concat(array[0]);
}