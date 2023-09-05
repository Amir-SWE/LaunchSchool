function penultimate(str) {
  let strArray = str.split(' ');
  return strArray[strArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true