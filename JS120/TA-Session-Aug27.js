// Press "Start Call" or "Join Call" in the bottom left!
/*
Topics to note:
---------------
- `[[Prototype]]`, `__proto__` inheritance 
- Object creation patterns
  - pros/cons of each
- Mix-ins

Prototype:
  - An object that another object inherits properties and/or methods from
  - `[[Prototype]]` -> prototypal inheritance implentation
    - It's an internal property that references the prototype object
*/

let obj = {
  name: "hello",
  // [[Prototype]]: Object.prototype,

  changeName(newName) {
    this.name = newName;
  }
};

obj.changeName("bye");
console.log(obj.name);
// obj.[[Prototype]] = {};

/*
Object Creation Patterns
- Factory Functions
  - A function that returns an object literal*

  Features:
    - Returns an object literal*
    - Methods are copied onto every single instance
    - We can't tell what function created the instances
*/

function makeCar(make, model) {
  return {
    make: make,
    model: model,
    drive() {
      console.log("vroom");
    }
  };
}

let car1 = makeCar("Toyota", "Corolla");
let car2 = makeCar("Honda", "Civic");

console.log(car1);
console.log(car2);

/*
// `makeToyota` sub-type of `makeCar`
// - `makeToyota` sub-type should also have a `radio` method
// DRY
- A sub-type should inherit all properties/methods of a super-type

- Ideally, without duplication, but not the case for factory functions
*/

/*
- Constructor/Prototype:
  - Use the `new` keyword:
    1. New object is created
    2. Execution context of the constructor function invocation* set to the new object
    3. New object's [[Prototype]] property is set to reference the function prototype (constructor function's `prototype` property)
    4. Function is invoked (typically this means properties are set on the new object)
    5. The new object is returned UNLESS the function explicitly returns another object

What is execution context?
  - The value of `this`
  - The environment in which a function runs in
  - HOW a function is invoked

  Features:
    - Can tell what "type" an instance object is
    - Can delegate method calls to the function prototype, so no duplication of methods across the instances
*/

function Car (make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.drive = function() {
  console.log("vroom");
}

let car3 = new Car("Toyota", "Corolla");
let car4 = new Car("Honda", "Civic");

console.log(car3);
console.log(car4);

car3.drive();
car4.drive();

if (car3 instanceof Car) {
  console.log("car3 is an instance");
}

if (car1 instanceof Car) {
  console.log("nothing");
}

/*
- Classes
  - Syntactic sugar of Constructor/Prototype Pattern
*/
// class Car {
//   constructor(make, model) {
//     this.make = make,
//     this.model = model
//   }

//   drive() {
//     console.log("vroom");
//   }
// }



/*
- Constructor/prototype
- Classes
- OLOO (Objects linking to Other Objects)
*/
let gallopMixIn = {
  gallop() {}
};

function MythicalBeasts() {}

^
|

function Centaur(weapon) {
  this.weapon = weapon;
}

Object.assign(Centaur.prototype, gallopMixIn);

function Animal() {}

^
|

function Horse(color) {
  this.color = color;
}

Object.assign(Horse.prototype, gallopMixIn);