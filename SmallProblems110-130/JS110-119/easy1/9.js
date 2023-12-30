function isLeapYear(year) {
  if (year < 1752) {
    return (year % 4 === 0);
  } 

  if (year % 400 === 0) return true;
  return (year % 4 === 0) && (year % 100 !== 0);
}

console.log(isLeapYear(2016))
console.log(isLeapYear(2015))
console.log(isLeapYear(2100))
console.log(isLeapYear(2400))
console.log(isLeapYear(240000))
console.log(isLeapYear(1))
console.log(isLeapYear(1700))
console.log(isLeapYear(100))
console.log(isLeapYear(400))
