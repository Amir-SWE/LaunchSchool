function isNegativeZero(n) {
  return (1 / n) === -Infinity;
}

console.log(isNegativeZero(-0));