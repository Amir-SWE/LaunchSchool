class Meetup {  
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(weekday, schedule) {
    let dayNum = this.weekdayToNum(weekday);
    let startingDay = this.scheduleToNum(schedule);
    let firstDate = new Date(this.year, this.month - 1, startingDay);

    if (schedule.toLowerCase() === 'last') {
      firstDate = new Date(this.year, this.month, 0);
      let firstDay = firstDate.getDate();
      for (let day = firstDay; day >= 0; day--) {
        if (firstDate.getDay() === dayNum) {
          return firstDate;
        } else {
          firstDate.setDate(day);
        }
      }
    }

    for (let day = startingDay; day <= 32; day++) {
      if (firstDate.getDay() === dayNum) {
        return firstDate;
      } else {
        firstDate.setDate(day);
      }
    }
    return null;
  }

  weekdayToNum(weekday) {
    switch (weekday.toLowerCase()) {
      case 'sunday': return 0;
      case 'monday': return 1;
      case 'tuesday': return 2;
      case 'wednesday': return 3;
      case 'thursday': return 4;
      case 'friday': return 5;
      case 'saturday': return 6;
      default: return -1;
    }
  }

  scheduleToNum(schedule) {
    switch (schedule.toLowerCase()) {
      case 'first': return 1;
      case 'second': return 8;
      case 'third': return 15;
      case 'fourth': return 22;
      case 'fifth': return 29;
      case 'teenth': return 13;
      default: return -1;
    }
  }
}

module.exports = Meetup;