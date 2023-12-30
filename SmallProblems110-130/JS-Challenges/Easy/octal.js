class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    if (isNaN(Number(this.octal))) {
      return 0;
    }
    
    let octalArray = String(this.octal).split('').map(num => Number(num)).reverse();
    let decimalSum = 0;

    if (octalArray.includes(8) || octalArray.includes(9)) {
      return 0;
    }

    for (let index = 0; index < octalArray.length; index++) {
      decimalSum += octalArray[index] * Math.pow(8, index);
    }

    return decimalSum;
  }
}

let myOctal = new Octal(233);
myOctal.toDecimal();

module.exports = Octal;

/*
233 ->
'233'
['2', '3', '3']

for each element:
sum += element * 8^(index)

*/