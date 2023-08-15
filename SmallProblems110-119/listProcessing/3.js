/*
input: two arrays of numbers
output: one array of numbers (product of all combination of number pairs) (sorted numerically)

Rules:
  - array should be sorted in ascending numerical order
  - neither argument will be empty

Test Case: [2, 4], [4, 3, 1, 2] =>   [2, 4, 4, 6, 8, 8, 12, 16]
  [2*4, 2*3, 2*1, 2*2, 4*4, 4*3, 4*1, 4*2]

Data Structure / Algorithm (arrays) :
- initialize empty results array
1. iterate through first array
2. iterate through second array as a nested iteration
  - foreach inside foreach
3. for each element in first array, multiply by each element in second array
4. add result to new array
  - arr.push()
5. sort resulting array in ascending numerical order
6. return results array
*/

function multiplyAllPairs(arr1, arr2) {
  let resultsArr = [];
  arr1.forEach(num1 => arr2.forEach(num2 => {
    resultsArr.push(num1 * num2);
  }))
  return sortAscending(resultsArr);
}

function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}



console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

