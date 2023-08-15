let title = "Flintstone Family Members";

let extraSpaces = 40 - title.length;

for (let i = 1; i < extraSpaces / 2; i++) {
  title = " " + title + " ";
}

console.log(title);