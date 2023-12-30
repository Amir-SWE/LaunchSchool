function twice(n) {
  let nStr = String(n);
  let length = nStr.length;
  if (length % 2 === 0) {
    if (nStr.substring(0, length / 2) === nStr.substring(length / 2, length)) {
      return n;
    }
  }

  return n * 2;
}

console.log(twice(7676));