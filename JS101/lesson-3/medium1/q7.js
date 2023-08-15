let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer); // newAnswer = 50

console.log(answer - 8); // 42 - 8 = 34