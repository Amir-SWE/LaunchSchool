function logInBox(str) {
  let topLine = '+' + '-'.repeat(str.length + 2) + '+';
  let secondLine = '|' + ' '.repeat(str.length + 2) + '|';
  let strLine = '| ' + str + ' |';

  console.log(`${topLine}\n${secondLine}\n${strLine}\n${secondLine}\n${topLine}`);
}

console.log(logInBox('To boldly go where no one has gone before.'));
console.log(logInBox(''));