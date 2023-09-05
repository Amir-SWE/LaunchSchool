/*
- initialize totalsum
- iterate through array
- get the sum of array up to index
- add to total sum
- return total sum
*/

function sumOfSums(arr) {
  let totalSum = 0;
  arr.forEach((_, index) => {
    totalSum += sumOfArray(arr.slice(0, index + 1));
  })
  return totalSum;
}

function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35