console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

function triangle(a1, a2, a3) {
  if (!isValidTriangle(a1, a2, a3)) return 'invalid';
  let angleArray = [a1, a2, a3];
  if (angleArray.some(angle => angle === 90)) {
    return 'right';
  } else if (angleArray.every(angle => angle < 90)) {
    return 'acute';
  }
  return 'obtuse';
}

function isValidTriangle(a1, a2, a3) {
  return ((a1 + a2 + a3 === 180) && (a1 > 0 && a2 > 0 && a3 > 0));
}