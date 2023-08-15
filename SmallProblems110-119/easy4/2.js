function isPalindrome(str) {
  let strArray = str.split('');
  let reverseStrArray = strArray.reverse();
  return reverseStrArray.join('') === str;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true