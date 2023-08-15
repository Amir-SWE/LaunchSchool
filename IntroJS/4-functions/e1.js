let bar = 1;
function foo() {
  let bar = 2
}

foo() // outside of scope
console.log(bar) // bar = 1