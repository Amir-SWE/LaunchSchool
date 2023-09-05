function cleanUp(str) {
  let strArray = str.split('');
  let newArray = [];

  for (let i = 0; i < strArray.length; i++) {
    if (! /[^a-zA-Z]+/.test(strArray[i])) {
      newArray.push(strArray[i]);
    } else {
      newArray.push(' ');
    }
  }
   
  return newArray.join('').replace(/\s+/g,' ').trim();;
}

console.log(cleanUp("---what's my +*& line?"));