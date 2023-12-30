class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
    this.checkSideLengths();
    this.checkTriangleEquality();
  }

  checkSideLengths() {
    if ([this.s1, this.s2, this.s3].some(side => side <= 0)) {
      throw new Error("Invalid side length (less than or equal to zero)");
    }
  }

  checkTriangleEquality() {
    let sideArray = [this.s1, this.s2, this.s3].sort((a, b) => a - b)
    if ((sideArray[0] + sideArray[1]) <= sideArray[2]) {
      throw new Error("Invalid side lengths (triangle equality)");
    }
  }

  kind() {
    if (this.isEquilateral()) {
      return "equilateral";
    } else if (this.isIsosceles()) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }

  isEquilateral() {
    if ((this.s1 === this.s2) && (this.s2 === this.s3)) {
      return true
    }
    return false;
  }

  isIsosceles() {
    if ((this.s1 === this.s2) || (this.s2 === this.s3) || (this.s1 === this.s3)) {
      return true
    }
    return false;
  }
}

module.exports = Triangle;