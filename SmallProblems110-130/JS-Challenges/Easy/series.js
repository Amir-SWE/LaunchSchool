class Series {
  constructor(digits) {
    this.digits = digits;
  }

  slices(num) {
    if (num > this.digits.length) {
      throw new Error('number of slices is bigger than length of digits');
    }

    let allSlices = [];

    for (let index = 0; index <= this.digits.length - num; index++) {
      allSlices.push(this.digits.slice(index, index + num).split(''));
    }

    let allSlicesNumbered = [];

    allSlices.forEach(subArray => {
      allSlicesNumbered.push(subArray.map(string => Number(string)));
    })

    return allSlicesNumbered;
  }
}


let series = new Series('01234');
console.log(series.slices(2));

module.exports = Series;

/*
01234 

1

forloop from 0 to (5-1)
push array containing index and index + 1
*/