class PerfectNumber {
  static classify(num) {
    if (num < 0) {
      throw new Error('negative numbers cannot be classified')
    }

    let divisors = [];

    for (let count = 1; count < num; count++) {
      if (num % count === 0) {
        divisors.push(count);
      }
    }

    let sum = divisors.reduce((sum, num) => sum + num, 0);

    if (sum < num) {
      return 'deficient';
    } else if (sum > num) {
      return 'abundant';
    } else {
      return 'perfect';
    }
  }
}

module.exports = PerfectNumber;