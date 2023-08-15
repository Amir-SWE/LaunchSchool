console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

/*
input: two integers
output: integer

12345, 3 -> 12453
rotating the element at index (length - count)

- number to string to array of digits
- move element[length - count] to last element
  - save element(length - count)
  - splice(length - count, 1)
  - push saved element to array
- join and return as number
*/

function rotateRightmostDigits(num, count) {
  let arr = String(num).split('');
  let targetNum = arr[arr.length - count];
  arr.splice(arr.length - count, 1);
  arr.push(targetNum);
  return Number(arr.join(''));
}