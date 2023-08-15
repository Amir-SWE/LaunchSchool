function getGrade(grade1, grade2, grade3) {
  let meanGrade = (grade1 + grade2 + grade3) / 3;
  if (meanGrade >= 90) return 'A';
  else if (meanGrade >= 80) return 'B';
  else if (meanGrade >= 70) return 'C';
  else if (meanGrade >= 60) return 'D';
  else return 'F';
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));