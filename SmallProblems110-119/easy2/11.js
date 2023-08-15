function centerOf(str) {
  let strArray = str.split('');
  if (str.length % 2 === 1) {
    return strArray[(str.length - 1) / 2];
  } else {
    return strArray[(str.length / 2) - 1] + strArray[(str.length / 2)];
  }
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));