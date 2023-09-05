console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

function staggeredCase(str) {
  return str.toLowerCase().split('').map((char, index) => {
    return index % 2 === 1 ? char : char.toUpperCase();
  })
  .join('');
}