let numbers = [1, 2, 3, 4, 5];
let reverseNumbers = numbers.slice().reverse();

console.log(numbers); 
console.log(reverseNumbers); // [ 5, 4, 3, 2, 1 ]


numbers = [1, 2, 3, 4, 5];
let sortedNumbers = [...numbers];
sortedNumbers.sort((num1, num2) => num2 - num1);

console.log(numbers); 
console.log(sortedNumbers); // [ 5, 4, 3, 2, 1 