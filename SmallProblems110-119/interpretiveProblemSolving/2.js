/*
input: odd integer n
output: diamond pattern

number of lines = integer n

top half
repeatAmount: (n-1)/2
asterikAmount: 1
repeatAmount times:
console.log(' '.repeat(repeatamount) + '*'.repeat(asterikAmount)' '.repeat(repeatamount))
reaptAmount -= 1
asterikAmount += 1

middle line
  console.log('*'.repeat(n))
bottom half

1:
*

3:
 *
***
 *

5:
  *
 ***
*****
 ***
  *
*/

function diamond(n) {
  console.clear();
  topHalfDiamond(n);
  console.log('*'.repeat(n));
  bottomHalfDiamond(n);
}

function topHalfDiamond(n) {
  emptySpace = (n - 1) / 2;
  asterickNum = 1;
  for (let line = 1; line <= (n - 1) / 2; line ++) {
    console.log(' '.repeat(emptySpace) + '*'.repeat(asterickNum) + ' '.repeat(emptySpace));
    emptySpace -= 1;
    asterickNum += 2;
  }
}

function bottomHalfDiamond(n) {
  emptySpace = 1;
  asterickNum = n - 2;
  for (let line = 1; line <= (n - 1) / 2; line ++) {
    console.log(' '.repeat(emptySpace) + '*'.repeat(asterickNum) + ' '.repeat(emptySpace));
    emptySpace += 1;
    asterickNum -= 2;
  }
}



diamond(13);