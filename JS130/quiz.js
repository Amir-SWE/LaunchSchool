/*

1. Why is let ’safer’ than var when used at a program’s top level?

- var creates a global variable when used at the top level of the program

*/


/*

2. A significant difference between let & var is that let is block-scoped, while var is function-scoped.

*/

/*

3. A function-scoped variable is visible within the function where it is declared

*/

/*

4. What's going on here?

Why can we access variable a when it's declared inside the if statement's block,
but we can't access b even though it is declared in the same block?

function foo() {
  if (true) {
    var a = 1;
    let b = 2;
  }

  console.log(a); // 1
  console.log(b); // ReferenceError: b is not defined
}

foo();

The if statement on line 30 will always execute because it's condition is true. 
Therefore, variable a is assigned the value 1 and variable b is declared and assigned the value b using the let declaration.
Since var is function scoped, it can still be accessed on line 35 and will log to the console.
Let, however, is a block scoped declaration, On line 36 we can no longer access the variable because it is out of scope.

*/

/*

5. Explain why this happens:

function foo() {
  if (false) {
    var a = 1;
  }

  console.log(a); // undefined
}

foo();

The var declaration is function scoped. Due to hoisting, any var declaration within the function will be moved to
the top of the function and assgined an initial value of undefined. Even though the assignment on line 54 never executes,
the variable a can still be accessed on line 57. 
*/

/*

6. Does variable declared with let have block scope or function scope or both?

function test () {
	let variable = 'test';
	console.log(variable);
}

it has block scope, in this case the block is the same block as the function. 
*/

/*

7. What are the 4 most important semantic changes that occur when using strict mode?

  - 1. not using this keyword will throw an error
  - 2. implicit execution context is undefined
  - 3. undeclared variables will throw error
  - 4. number starting with 0 and not containing 8 or 9 will throw error

*/

/*

8. What are the 3 keywords that declare variables w/ block scope and 2 keywords that declare variables w/ function scope
  - block
    - 1. let
    - 2. const
  - function
    - 1. var
    - 2. function

*/

/*

9. Fill in the declared scope blanks

let foo1 = 1;        // declared scope is _ scope
var bar1 = 2;        // declared scope is _ scope

if (true) {
  let foo2 = 3;      // declared scope is _ scope
  var bar2 = 4;      // declared scope is _ scope
}

function xyzzy() {  // declared scope is _ scope
  let foo3 = 5;     // declared scope is _ scope
  var bar3 = 6;     // declared scope is _ scope

  if (true) {
    let foo4 = 7;   // declared scope is _ scope
    var bar4 = 8;   // declared scope is _ scope
  }
}

*/

/*

10. One of the preliminary items JS does during the creation phase is find all of the
 variable, function, and class declarations and record the _’s name and designate its _.


*/

/*

11. What is the main significant difference between how hoisting works with var compared to how it works with let and const ?

  initial assignment: var is assigned as undefined, let and const are not assigned (TDZ)
*/

/*

12. Why do the first two error messages differ from the third?

console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
let foo;

console.log(qux); // ReferenceError: Cannot access 'qux' before initialization
const qux = 42;

console.log(baz); // ReferenceError: baz is not defined

foo and qux declarations are hoisted but not given a value, baz is not declared at all
*/

/*

13. How does this code snippet demonstrate that ‘hoisting isn’t real’?

bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}

*/

/*

14. On what line does the error occur in this snippet and what type of error is it?

let foo = "hello";

function foo() {
  console.log("hello");
}

*/

/*

15. On what line does the error occur in this snippet and what type of error is it?

function foo() {
  console.log("hello");
}

let foo = "hello";

*/


/*

16. On what line does the error occur in this snippet and what type of error is it?



*/

/*

17. Can you disable strict mode later on in a file or function?

no
*/

/*

18. Can you prevent strict mode from being automatically enabled within the body of a class?

no
*/

/*

19. What type of error will be thrown if we forget to use this ?

"use strict";

function Child(age) {
  this.age = age;
};

Child.prototype.setAge = function(newAge) {
  age = newAge; // <<<< ???
}

*/

/*

20. Why does the first snippet here work but the second snippet does not?

function go1() {
  go2(); //
  function go2() {
    console.log(go2);
  }
}

function go1() {
  go2(); //
  let go2 = function() {
    console.log(go2);
  }
}
*/

/*

21. The following snippet is not an example of PFA, how could you alter it to make it PFA?

function makeLogger(identifier) {
  return function(msg) {
    console.log(identifier, msg);
  };
}

*/

/*
22. Name 4 things closures make possible:
  - 1. private data
  - 2. partial function application
  - 3.
  - 4.
*/

/*
23. What is the difference between these two snippets in relation to side effects?

let letters = ['a', 'b', 'c'];

function removeLast(array) {
  array.pop();
}

removeLast(letters);


function insertNumberInOrder(arrayOfNumbers) {
  arrayOfNumbers = arrayOfNumbers.slice();
  arrayOfNumbers.push(arrayOfNumbers);
  arrayOfNumbers.sort((a, b) => a - b);
  return arrayOfNumbers;
}

*/

/*
24. Re-write this using an IIFE and find the return value:

var prod = 1;
prod *= 2;
prod *= 3;

let numbers = [1, 7, 3, 3];

function prod(arr) {
  return arr.reduce((prod, number) => {
    prod *= number;
    return prod;
  }, 1);
}

prod *= prod(numbers);  // ?

*/

/*
25. Write an IIFE that counts down from a provided
number argument and uses recursion to calls itself:


*/

/*
26. Re-write this snippet using classical JS syntax:

function connect(...letters) {
  return letters.reduce((acc, letter) => acc += letter);
}

let result = connect('f', 'r', 'o', 'g');

*/

/*
27. Rewrite the final line of code in the following snippet using classic JavaScript syntax:

const object = {
  one: "I am the first",
  two: "I am the two",
  three: ['1', '2', '3'],
  rest: { 1: '1', 2: '2' },
};

const { one, two, ...rest } = object;

*/

/*
28. Explain in detail what the last two lines of this code are doing.

let obj = {
  a: 'a',
  b: 'b',
  c: 'c',
};

let obj2 = {...obj};
let { ...obj3 } = obj;

*/

/*
29. Using shorthand notation, what is the missing code?

function triangle() {
  let triangleType = "scalene";
  let totalPerimeter = 9;
  let sides = ["long", "short", 'medium'];
  // missing code


}

let { type, totalPerimeter, sides } = triangle();
console.log(type);    // scalene
console.log(totalPerimeter);     // 9
console.log(sides);  // ["long", "short", 'medium']

*/
