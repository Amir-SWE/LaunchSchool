console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

function swapCase(str) {
  return str.split('').map(char => swapCharCase(char)).join('');
}

function swapCharCase(char) {
  if (char >= 'a' && char <= 'z') {
    return char.toUpperCase();
  } else if (char >= 'A' && char <= 'Z') {
    return char.toLowerCase();
  }
  return char;
}