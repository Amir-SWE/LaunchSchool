function isBalanced(str) {
  let balance = 0;
  let index = 0;
  while (balance >= 0 && index < str.length) {
    if (str[index] === '(') {
      balance += 1;
    } else if (str[index] === ')') {
      balance -= 1;
    }
    index++;
  }
  return balance === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);