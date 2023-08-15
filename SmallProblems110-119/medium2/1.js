/*
input: string
output: object with three key value pairs:
  - lowercase percentage
  - uppercase percentage
  - neither percentage

determine how many characters are lowercase
determine how many are uppercase
determine how many are neither
calculate percentages and add into object

'abCdef 123'

- initialize object so that each key has a value of 0
- iterate through string
  - if character is uppercase add one to uppercase key
  - if character is lowercase add one to lowercase key
  - if neither, add one to neither
- convert counts into percentages
  - iterate through object values
  - for each value reassign it to (value / length of string).toFixed(2)
- return object
*/

function letterPercentages(str) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  str.split('').forEach(char => {
    if (isLowerCase(char)) {
      obj.lowercase += 1;
    } else if (isUpperCase(char)) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  })

  for (let key in obj) {
    obj[key] = ((obj[key] / str.length) * 100).toFixed(2);
  }

  return obj;

}

function isLowerCase(char) {
  return (char >= 'a' && char <= 'z');
}

function isUpperCase(char) {
  return (char >= 'A' && char <= 'Z');
}



console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }