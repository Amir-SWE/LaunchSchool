let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

let newFlintstones = [];

flintstones.forEach(name => newFlintstones = newFlintstones.concat(name));

console.log(newFlintstones);