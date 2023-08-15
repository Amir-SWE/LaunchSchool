console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

function halvsies(arr) {
  return [firstHalfOfArray(arr), secondHalfOfArray(arr)];
}

function firstHalfOfArray(arr) {
  let halfLength = Math.ceil(arr.length / 2)
  return arr.slice(0, halfLength);
}

function secondHalfOfArray(arr) {
  let halfLength = Math.ceil(arr.length / 2)
  return arr.slice(halfLength)
}

// input: array of numbers
// output: two arrays of numbers: first array containing first half of input
// second array containing second half

/*
1. save first half of array
  a. first half will be from 0 to (length of array divided by 2 (rounded up))
  [1, 2, 3, 4] -> array.slice(0, 2), array.slice(2)
  [1, 5, 2, 4, 3] -> array.slice(0, 3), array.slice(3)
2. save seconds half of array
  a. second half will be from 
3. save both arrays in another array
4. return array from step 3

*/