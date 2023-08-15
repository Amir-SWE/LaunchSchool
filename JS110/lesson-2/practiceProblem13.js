let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let aOdd = a.filter(num => num % 2 === 1);
  let bOdd = b.filter(num => num % 2 === 1);
  let aSum = aOdd.reduce((sum, num) => sum + num, 0);
  let bSum = bOdd.reduce((sum, num) => sum + num, 0);

  return aSum - bSum;
})

console.log(arr);