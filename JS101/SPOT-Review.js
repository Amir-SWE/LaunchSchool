// 0 -> explain the concept of truthy and falsy values in javascript
// identify all falsy values

// 1
console.log([] === []);

console.log([] == []);


// 2
let num = 2

function addOne(num) {
  num += 1;
}

addOne(num);
console.log(num);


// 2.1
let num1 = 2;

function addOne(num) {
  num += 1;
}

addOne(num1);
console.log(num1);


// 3
const a = [1, 2, 3];

a = a.concat(4);

console.log(a);


// 3.1
const a = [1, 2, 3];

a = a.push(4);

console.log(a);


// 3.2
const a = [1, 2, 3];

let b = a.push(4);

console.log(b);




// 4 
// Identify all global and local variables
// Does the function joinWithUnderscore have any side effects?
let str1 = 'a';
let str2 = 'b';
let str3 = 'c';

function joinWithUnderscore(num1, num2) {
  let joinedString = num1 + '_' + num2;
  return joinedString;
}