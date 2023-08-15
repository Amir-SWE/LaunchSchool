let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let incrementedArray = arr.map(obj => {
  return Object.fromEntries(Object.entries(obj).map(arr => [arr[0], arr[1] + 1]))
})


console.log(arr);
console.log(incrementedArray);