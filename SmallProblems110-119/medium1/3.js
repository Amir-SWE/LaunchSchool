function rotateRightmostDigits(num, count) {
  let arr = String(num).split('');
  let targetNum = arr[arr.length - count];
  arr.splice(arr.length - count, 1);
  arr.push(targetNum);
  return Number(arr.join(''));
}

function maxRotation(num) {
  let newNum = num;
  let strNum = String(num);
  for (let count = strNum.length; count >= 1; count--) {
    newNum = rotateRightmostDigits(newNum, count);
  }
  return newNum;
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845