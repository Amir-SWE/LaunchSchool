console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

function multiplicativeAverage(arr) {
  let multiplyTotal = arr.reduce((total, num) => total * num, 1);
  let average = multiplyTotal / arr.length;
  return average.toFixed(3);
}