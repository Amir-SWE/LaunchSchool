function xor(c1,c2) {
  return !!((c1 && !c2) || (!c1 && c2));
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true