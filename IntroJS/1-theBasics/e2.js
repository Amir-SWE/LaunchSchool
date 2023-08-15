let num = 4936

let d1 = 4936 % 10

let d2 = ((num-d1)/10) % 10

let d3 = ((num-d1)/10 - d2)/10 % 10

let d4 = (((num-d1)/10 - d2)/10 -d3) /10


console.log(d1)
console.log(d2)
console.log(d3)
console.log(d4)