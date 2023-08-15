const phrase = 'The Flintstones Rock!';
const repeat = 10;
let indent = ""

for (let i = 1; i <= 10; i++) {
  console.log(indent + phrase);
  indent += "  ";
}