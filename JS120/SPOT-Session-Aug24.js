/*
- What is a constructor?
  - a function that instantiates and returns a new object
- What happens when a function invocation is preceded by the keyword `new`?
- What is `this`? What is the role of `this` within the body of constructor functions?
- Explicit return values within the body of a constructor function?

- Significance of the constructor's `prototype` property?

Patterns Introduced by L3:
- Factory Functions
- constructor functions (pseudo-classical)
- classes 

Chris: super command
*/

function Rectangle(length, width) {
  // is `this` an instance of Rectangle?
  // if yes great!
  // if no invoke Rectagle properly 
  if (!(this instanceof Rectangle)) {
    
    return new Rectangle(length, width);
  }
    this.length = length;
    this.width = width;

    

  
  // no explictit return value
};

// How can we add methods to the constructor's prototype? And why?

Rectangle.prototype.area = function () {
  return this.length * this.width;
}

// intended to be invoked with `new`  
let mySquare = new Rectangle(5,5); // { [[Prototype]] : Rectangle.prototype}
let mySquare2 = Rectangle(5, 6);

console.log(mySquare);
console.log(mySquare2);

// function hello() {
//   console.log(this); // 
// }

// //normal function invocation 
// hello();
// console.log(this);

// console.log(Rectangle.prototype.constructor === Rectangle);
// console.log(Rectangle.prototype);
// console.log(Rectangle.prototype.hasOwnProperty('constructor'))

function Square (sideLength) {
  // invokes the Rectangle constructor with execution context explicitly set to new empty object 
  return Rectangle.call(this, sideLength, sideLength);
}
// { [[Prototype]] : Rectagle.prototype }
Square.prototype = Object.create(Rectangle.prototype) // standard
// Square.prototype = Object.create(new Rectangle(5,5)) // standard
Square.prototype.constructor = Square;
// common mistake Square.constructor 

let squareTest = new Square(4); // { [[Prototype]] : Square.prototype }
console.log(squareTest.area());
console.log(squareTest instanceof Rectangle); 

console.log(Rectangle.prototype.isPrototypeOf(squareTest));

// { length : 5, width : 5, [[Prototype]] : Rectagle.prototype }
// square: { [[Prototype]] : { length : 5, width : 5, [[Prototype]] : Rectagle.prototype } }
let square = Object.create(new Rectangle(5,5)); // non-standard


// { [[Prototype]] : Rectagle.prototype }
let square2 = Object.create(Rectangle.prototype) // standard


