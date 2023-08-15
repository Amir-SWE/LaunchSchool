let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenArr = arr.filter(obj => {
  let hasOdd = Object.values(obj).filter(arr => arr.some(num => num % 2 === 1));
  return hasOdd.length === 0 ? true : false;
})

console.log(evenArr);