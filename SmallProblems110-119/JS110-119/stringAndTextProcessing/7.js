console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

function staggeredCase(str) {
  let finalStr = '';
  let index = 0;
  let counter = 0;
  while (index < str.length) {
    if (isLetter(str[index])) {
      finalStr += counter % 2 === 0 ? str[index].toUpperCase() : str[index].toLowerCase();
      counter ++;
    } else {
      finalStr += str[index];
    }
    index++;
  }
  return finalStr;
}

function isLetter(char) {
  return ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'));
}
