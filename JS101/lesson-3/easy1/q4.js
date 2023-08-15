let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let lowerCase = munstersDescription.toLowerCase();
let capitalized = lowerCase[0].toUpperCase()+lowerCase.slice(1);

console.log(capitalized);