let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = {};

flintstones.forEach((flintstone, idx) => flintstonesObj[flintstone] = idx);

console.log(flintstonesObj);