class Robot {
  constructor () {
    this.robotName = this.generateName();

    while (Robot.robotNameDatabase.includes(this.robotName)) {
      this.robotName = this.generateName();
    }
    
    Robot.robotNameDatabase.push(this.robotName);
  }

  name() {
    return this.robotName;
  }

  reset() {
    this.robotName = this.generateName();

    while (Robot.robotNameDatabase.includes(this.robotName)) {
      this.robotName = this.generateName();
    }
    
    Robot.robotNameDatabase.push(this.robotName);
  }

  generateName() {
    return Robot.randomLetter() + Robot.randomLetter()
      + Robot.randomNumber() + Robot.randomNumber() + Robot.randomNumber();
  }

  static robotNameDatabase = [];

  static randomLetter() {
    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
      'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z'];
    
    return LETTERS[(Math.floor(Math.random() * LETTERS.length))];
  }

  static randomNumber() {
    return (Math.floor(Math.random() * 10));
  }
}

// let robot1 = new Robot();
// let robot2 = new Robot();

// console.log(Robot.robotNameDatabase);

module.exports = Robot;