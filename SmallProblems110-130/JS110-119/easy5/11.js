console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

const MINUTES_IN_DAY = 1440;

function timeOfDay(num) {
  while (num < 0) {
    num += 1440;
  }
  let hour = getHourOfDay(num);
  let minute = getMinuteOfDay(num);
  while (hour >= 24) {
    hour -= 24;
  }
  return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
}

function getHourOfDay(num) {
  return Math.floor(num / 60);
}

function getMinuteOfDay(num) {
  return Math.round(((num / 60) - getHourOfDay(num)) * 60);
}


/*
input: (number) integer representing minutes before or after midnight
output: (string) time of day is hh:mm format

timeOfDay(800)
800 / 60 -> 13.333 
- hour = 13
- minute = 0.333 * 60 = 20

total minutes in a day: 24 * 60: 1440

Algorithm: 
- if negative number - > 1440 - number
- determine hour
  - divide number by 60 and round down 
- determine minute
  - divide number by 60, subtract result from result rounded down, multiply by 60, round
- if hour is 24 or larger, keep subtracting 24 until it is not
- output hour and minute as a string in format 'hh:mm'

*/
