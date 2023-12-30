function triangle(n) {
  let buildTriangle;
  for (let i = 1; i <= n; i++) {
    buildTriangle = ' '.repeat(n - i);
    buildTriangle += '*'.repeat(i);
    console.log(buildTriangle);
  }
}

triangle(9);