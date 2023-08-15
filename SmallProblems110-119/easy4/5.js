function runningTotal(arr) {
  if (arr.length < 2) return arr;
  let runningTotalArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    runningTotalArray.push(arr[i] + runningTotalArray[i - 1]);
  }
  return runningTotalArray;
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []