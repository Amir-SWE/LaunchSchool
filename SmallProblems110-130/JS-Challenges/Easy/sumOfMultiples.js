class sumOfMultiples {
  constructor(...multiples) {
    if (multiples.length === 0) {
      this.multiples = [3, 5];
    } else {
      this.multiples = multiples;
    }
    
  }

  static to(num) {
    return new sumOfMultiples().to(num);
  }

  to(num) {
    let sum = 0;

    for (let count = 1; count < num; count++) {
      if (this.multiples.some(multiple => count % multiple === 0)) {
        sum += count;
      }
    }

    return sum;
  }
}

module.exports = sumOfMultiples;