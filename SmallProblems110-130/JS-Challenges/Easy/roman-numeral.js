class RomanNumeral {
  constructor(number) {
    this.number = number;
    this.numberString = String(number);
  }

  static conversions = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }

  static exceptions = {
    4: 'IV',
    9: 'IX',
    40: 'XL',
    90: 'XC',
    400: 'CD',
    900: 'CM',
  }
  
  static conversionsArray = Object.keys(RomanNumeral.conversions);
  static exceptionsArray = Object.keys(RomanNumeral.exceptions);

  toRoman() {
    let romanNumeral = '';

    if (RomanNumeral.exceptionsArray.includes(this.numberString)) {
      romanNumeral += RomanNumeral.exceptions[this.numberString];
    } else if (RomanNumeral.conversionsArray.includes(this.numberString)) {
      romanNumeral += RomanNumeral.conversions[this.numberString];
    
    }

    return romanNumeral;
  }
}

// let number = new RomanNumeral(1);
// console.log(RomanNumeral.exceptionsArray);

module.exports = RomanNumeral;