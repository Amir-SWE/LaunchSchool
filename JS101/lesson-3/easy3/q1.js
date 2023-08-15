let numbers = [1, 2, 3, 4];
let numbers1 = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];

numbers = [];
numbers1.length = 0;
numbers2.splice(0,numbers2.length);


console.log(numbers);
console.log(numbers1);
console.log(numbers2);
