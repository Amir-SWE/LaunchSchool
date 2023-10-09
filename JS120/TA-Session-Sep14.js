// We're on Zoom now!
/*
Topics List:
------------
- Differences in object creation patterns
  - Factory Functions
  - Constructor functions
  - OLOO

  - ES6 Classes
    - `super` keyword

- Prototypal inheritance vs. Pseudo-classical inheritance 

- Polymorphism
  - Inheritance vs. duck typing

- `this`, execution context

 Spot Wiki questions:  https://fine-ocean-68c.notion.site/JS120-cd48c69c3e4b43ac851b2c348f898d1f?p=aed422b1bd4447498e09850634ac161f&pm=s

14) Compare prototypal inheritance with pseudo-classical inheritance. What are the similarities and differences? Are those concept related or not?

*/

/*
Sub-Type Goals
--------------
- The sub-type should have access to properties and methods from the super-type


Factory Functions
-----------------
- Returns an object literal*
- Define properties by passing in arguments, and use values explicitly on object literal
- Methods are duplicated across every instance
- Can't tell what "type" or "class" an instance belongs to

- No prototypal inheritance between classes/types, or even instances
*/

function makeCar(wheels, make, model) {
  return {
    wheels: wheels,
    make: make,
    model: model,
    drive: function() {
      console.log("Driving");
    }
  };
}

// make another object with the methods
// use Object.assign to combine with local var `car`

// directly assign it

function makeToyota(model) {
  let car = makeCar(4, "Toyota", model);
  Object.assign(car, { playStereo: function() { console.log("Playing stereo"); }});

  return car;
}

function makeToyota(model) {
  let car = makeCar(4, "Toyota", model);
  car.playStereo = function() {
    console.log("Playing stereo");
  };

  return car;
}

/*
Constructor Function
--------------------
- Creating a function that will create objects for us
- Assign properties by passing in arguments using the `this` keyword to set the props
- Methods live on the function prototype: Object referenced by function's `prototype` property

Invoking a function with `new` keyword:
  1. Creates a new object
  2. Execution context of this function invocation is set to be that newly created object
  3. Newly created object's [[Prototype]] property references function prototype
  4. Function will be invoked (usually means the properties are set)
  5. Returns that newly created object
    - UNLESS, we explicitly `return` another object

Execution Context:
  - The environment in which a function is executed in
  - Execution context, and therefore `this`, is determined by HOW a function is called

Sub-Typing:
- Sub-type has access to all the properties and methods of the super-type
  - 
*/
function makeToyota(model) {
  let car = makeCar(4, "Toyota", model);
  car.playStereo = function() {
    console.log("Playing stereo");
  };

  return car;
}

function makeToyota(model) {
  car.playStereo = function() {
    console.log("Playing stereo");
  };

  return car;
}

function Car(wheels, make, model) {
  this.wheels = wheels;
  this.make = make;
  this.model = model;
} // Car.prototype -> {}

Car.prototype.drive = function() {
  console.log(`Driving`);
}; // Car.prototype -> { drive: function() { ... } }

// sub type 
function Toyota(model) {
  Car.call(this, 4, "Toyota", model);
}

// Object.setPrototypeOf(child, parent)
// "deprecated", do not use: Object.setPrototypeOf(Toyota.prototype, Car.prototype);
Toyota.prototype = Object.create(Car.prototype); // {} -> Car.prototype
Toyota.prototype.constructor = Toyota;

Toyota.prototype.playStereo = function() { console.log("Playing stereo") };

let car2 = new Toyota('Corolla');
// car2.drive();
// car2.playStereo();

// Car(); // `this` -> global object, regular function call, default function call

// obj.foo(); // method invocation syntax, implicit execution context of the object calling the method
// // which has a implicit execution context of globa object

/*
Class -> ES6 Syntactic Sugar
*/

// class Car {
//   constructor(wheels, make, model) {
//     this.wheels = wheels;
//     this.make = make;
//     this.model = model;
//   }

//   drive() {
//     // ...
//   }
// }

// class Toyota extends Car {
//   constructor(model) {
//     super(4, "Toyota", model);
//     this.seats = 5;
//   }

//   playStereo() {}
// }

/*
Prototypal Inheritance
  - Mechanism that allows for an object to inherit properties/methods from another object
    - Internal [[Prototype]] property points to the object in inherits from
    - In JS: Single inheritance, can only inherit from one object
    - Prototype object can inherit from another object, and so on, and so forth = prototype chain

Pseudo-Classical Inheritance
-> Constructors/ES6 Class
  - One type inherits from another type
  - Related to prototypal inheritance in the sense that it uses prototypal inheritance under the hood

Pseudo-Classical Object Creation Pattern
Constructor functions
"Classes" in JS -> are also pseudo-classical object creation pattern

Read more: https://launchschool.com/lessons/d5964d17/assignments/006358da

Prototypal Inheritance vs. Pseudo-Classical Inheritance
As used in JavaScript, the term inheritance is an overloaded word. It describes two related but distinct forms of inheritance: prototypal and pseudo-classical.

The simpler form of inheritance is prototypal inheritance or prototypal delegation. We sometimes call this form of inheritance object inheritance since it works with one object at a time. An object's internal [[Prototype]] property points to another object, and the object can delegate method calls to that other object. We've seen plenty of examples of prototypal inheritance in earlier assignments. For instance:
*/

class Dog {}
console.log(Dog.prototype);
console.log(Dog.prototype.constructor); 