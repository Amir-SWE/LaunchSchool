let munstersDescription = "The Munsters are creepy and spooky.";

let stringArray = munstersDescription.split('');

let newArray = stringArray.map(char => char === char.toLowerCase() ? 
  char.toUpperCase() : char.toLowerCase()
);

console.log(newArray.join(''));