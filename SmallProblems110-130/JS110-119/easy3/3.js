function stringy(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    str += (i % 2 === 0) ? ('0') : ('1');
  }
  return str;
}

console.log(stringy(9));