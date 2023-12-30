function startCounting() {
  let count = 1;
  setInterval(() => {
    console.log(count);
    count++;
  }, 1000)
}

stopCounting(id) {
  clearInterval(id);
}

startCounting();

// let idk = makeUniqueID;
// idk();
// idk();
// let idk2 = makeUniqueID;
// idk2();
// idk();
// console.log(makeUniqueID);


/*
function makeUniqueIdGenerator() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  }
};

let makeUniqueId = makeUniqueIdGenerator();
makeUniqueId(); // => 1
makeUniqueId(); // => 2
makeUniqueId(); // => 3
*/
/*
const makeUniqueId = (function() {
  let count = 0;
  return function() {
    ++count;
    return count;
  };
})();

makeUniqueId(); // => 1
makeUniqueId(); // => 2
makeUniqueId(); // => 3

*/



// function makeMultiplier(factor) {
//   return function(otherFactor) {
//     return multiply(factor, otherFactor);
//   };
// }

// const multiplyBySeven = makeMultiplier(7);
// multiplyBySeven(3);


// function fullName(first) {
//   return function(last) {
//     return logger(first,last) // <<<<<<
//   }
// }

// function logger(first,last) {
//   console.log(`My name is ${first} ${last}!`)
// }

// let jordan = fullName("Jordan");
// jordan("Beall");
// jordan("Brown");


// jordan('JingleheimerSchmidt')



// function outer (var1) {
//   return function(var2) {
//     return function fuckifIknow(var1, var2) {
      
//     }
//   }
// }


// function addFive(num1) {
//   return function add(num2) {
//     return num1 + num2;
//   }
// }
// function hello() {
//   let names = ['amir', 'chase'];

//   return {
//     method : function() {
//       names.pop();
//       console.log(names);
//     }
//   }
// }

// let obj = hello();
// obj.method();
// obj.method();


// console.log(hello.names);

// function foo () {
//   // whawlerjdsfsadf
// }

// function foo () {      /// override 
//   // whawlerjdsfsadf
// }

// function hello () {

// }

// hello; 


// console.log(hello);

// function hello () {
//   console.log('hello')
// }

// console.log(hello);

// var hello = "hey whats up";

// console.log(hello);  // "hey whats up";




// bar();
// var bar = "hello";
// function bar() {
//   console.log('world')
// }

// var
/*
JavaScript Topics

//////////////////////////////////////////////////////////////////


Hoisting

- 'preliminary tasks' that take place during the creation phrase
- function declarations and theirs bodies are effectively tho not literally raised to the top of declared scope
- variable names declared with var are raised and set to undefined, until reassigned
- variable names declared with let, const, & class are raised but are unitialized (not set, stuck it TDZ)
- var & function are function scoped
- const, let, & class are block scoped

function () {
  var variable;

  if (false) {
    var variable = 'whatever';
  }
  console.log(var); // undefined
}

Function expressions
hello()
 var hello = function () {
  console.log('hello)
 }
How are classes hoisted

The var statement

//////////////////////////////////////////////////////////////////


Strict mode

- lexically scoped
- enabled automatically inside ES6 classes & Modules
- Cannot do w/ strict mode  
 - undeclared variables raise an error
 - cannot use a number that start with 0 / doesn't include 8, 9
 - implicit context is undefined
 - if forget to use `this` in a method, raises an Exceptions

 - SM prevents declaring 2 function parameters with the same names
 
 - top level with 'use strict' (this is called a PRAGMA)
 - strict mode inside function


//////////////////////////////////////////////////////////////////


Closures, scope, and private data
- lexically scoped
- combo of function definition and the lexical environment in which the function is defined
- function combined with any variables from its lexical scope that the function needs
- 


//////////////////////////////////////////////////////////////////



Partial function application


IIFEs


- private scope, private data
 - means can prevent namespace clashing
- one off functions / one time use functions
- 

(function () {
  return retVal;
})(argument); <<<<< parentheses on outside


let iife = (function () {
f
})();


Shorthand notation (understanding, not using)
Modules (CommonJS)
Exceptions
Pure functions and side effects
Asynchronous programming (setTimeout, setInterval)


*/

// foo = function () {
//   console.log('Waiting for bar!');
// }

// function foo() {
//   console.log(foo);
//   // function bar() {
//   //   console.log('bar again');
//   // }
//   function bar() {
//     console.log('bar again and again');
//   }
//   bar();
// }

// console.log(foo());





/*

Testing With Jest
Testing terminology
Jest
expect and matchers (toBe and toEqual especially)
SEAT approach
Understanding code coverage
Writing tests


*/


/*

Packaging Code
Project directory layout
what is transpilation
npm and npx
package.json and package-lock.json
npm scripts
packaging projects


*/