console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount(str) {
  let letterObj = {};
  letterObj.lowercase = 0;
  letterObj.uppercase = 0;
  letterObj.neither = 0;

  for (let index = 0; index < str.length; index++) {
    if (str[index] >= 'a' && str[index] <= 'z') {
      letterObj.lowercase++;
    } else if (str[index] >= 'A' && str[index] <= 'Z') {
      letterObj.uppercase++;
    } else {
      letterObj.neither++;
    }
  }

  return letterObj;
}