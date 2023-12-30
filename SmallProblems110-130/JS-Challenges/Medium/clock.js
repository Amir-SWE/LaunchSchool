class Clock {
  constructor(timeInMinutes) {
    this.timeInMinutes = timeInMinutes;
    while (this.timeInMinutes < 0) {
      this.timeInMinutes = 1440 + this.timeInMinutes;
    } 
    while (this.timeInMinutes > 1440) {
      this.timeInMinutes -= 1440;
    }
  }

  static at(...times) {
    let minutes = 0;
    minutes += times[0] * 60;
    if (times.length === 2) {
      minutes += times[1];
    }

    return new Clock(minutes);
  }

  digitsToTime(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }

  toString() {
    let hour = Math.floor(this.timeInMinutes / 60);
    let minutes = this.timeInMinutes % 60;

    return this.digitsToTime(hour) + ':' + this.digitsToTime(minutes);
  }

  add(mins) {
    return new Clock(this.timeInMinutes + mins);
  }

  subtract(mins) {
    return new Clock(this.timeInMinutes - mins);
  }

  isEqual(clock) {
    return this.timeInMinutes === clock.timeInMinutes;
  }
}

let myClock = Clock.at(11, 9);
console.log(myClock.timeInMinutes);
console.log(myClock.toString());

module.exports = Clock;