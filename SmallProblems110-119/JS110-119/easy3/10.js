function century(year) {
  console.log(addCenturySuffix(centuryNumber(year)));
}

function centuryNumber(year) {
  if (year <= 100) {
    return 1;
  } else if (year % 100 === 0) {
    return year / 100;
  } else {
    return Math.floor(year / 100) + 1;
  }
}

// 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th ...
function addCenturySuffix(century) {
  let centuryString = String(century);
  let lastDigit = Number(centuryString[centuryString.length - 1]);
  let lastTwoDigits;
  if (century > 10) {
    lastTwoDigits = centuryString[centuryString.length - 2] + centuryString[centuryString.length - 1];
  }
  if ((lastTwoDigits > 10) && (lastTwoDigits < 14)) {
    return centuryString + 'th';
  }
  switch (lastDigit) {
    case 1: return centuryString + 'st';
    case 2: return centuryString + 'nd';
    case 3: return centuryString + 'rd';
    default: return centuryString + 'th';
  }

}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"