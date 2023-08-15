function allCapsIf10(string) {
  if (string.length > 10) {
    return string.toUpperCase()
  } else {
    return string
  }
}

console.log(allCapsIf10('abcdefghij'))