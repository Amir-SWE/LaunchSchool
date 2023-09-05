console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

/*
valid cases:
  - all sides must be greater than 0
  - sum of length of two shortest sides must be greater than longest side

if valid:
  - all three sides are equal -> equilateral
  - two sides are equal, third is different -> isosceles
  - all three sides are different

Algorithm:

- check if its's a valid triangle
  - if it is not, return 'invalid
  - if it is:
    - check if it is equilateral
    - check if it is isoceles
    - otherwise it must be scalene

*/

function triangle(s1, s2, s3) {
  if (!isValidTriangle(s1, s2, s3)) return 'invalid';
  if (isEquilateral(s1, s2, s3)) {
    return 'equilateral';
  } else if (isIsosceles(s1, s2, s3)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function isValidTriangle(s1, s2, s3) {
  if (s1 <= 0 || s2 <= 0 || s3 <= 0) return false;

  let sortedArray = [s1, s2, s3].sort((a, b) => a - b);
  return (sortedArray[0] + sortedArray[1] > sortedArray[2]);
}

function isEquilateral(s1, s2, s3) {
  return (s1 === s2 && s1 === s3 && s2 === s3);
}

function isIsosceles(s1, s2, s3) {
  return ([s1, s2].includes(s3) || s1 === s2);
}