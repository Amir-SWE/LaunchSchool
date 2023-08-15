console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

function reverseWords(str) {
  let reverseWord = (word) => word.split('').reverse().join('');
  return str.split(' ').map(word => word.length >= 5 ? reverseWord(word) : word).join(' ');
}