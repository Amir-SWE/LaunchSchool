function isDotSeparatedIpAddress(inputString) {
  let dotCounter = 0;
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  inputString.split('').forEach(function(char) {
    if (char === '.') {
      dotCounter += 1;
    }
  })

  return (dotCounter === 3);
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress('abc'))