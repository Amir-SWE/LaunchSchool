console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);


function afterMidnight(str) {
  let hour = parseInt(str.split(':')[0]);
  if (hour === 24) hour = 0;
  let minute = parseInt(str.split(':')[1]);
  return (hour * 60) + minute;
}

function beforeMidnight(str) {
  if (afterMidnight(str) === 0) return 0;
  return 1440 - afterMidnight(str);
}
