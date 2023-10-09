// Object Factories
/*
function makeCar() {
  return {
    make,
    model,
    year,

    getDescription() {

    }
  }
}
*/



// Constructors and Prototypes
/*
let Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.getDescription = function() {

}

let myCar = new Car; 

Using new keyword:
1. Create a new object
2. Set the new function's prototype to refernce the constructor function's prototype
3. Set the execution context of the constructor function to the new object
4. Invoke the function
5. Return the new object (unless another object is explicitly returned)
*/



// Classes
/*
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {

  }
}
*/



// OLOO
/*
let carPrototype = {
  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this;
  },

  getDescription() {

  }
}

let myCar = Object.create(carPrototype).init('Volvo', 'S60', '2012');

console.log(myCar.constructor);
*/

let obj = {
  name: 'matt',
};

let func = function () {
  return true;
}

console.log(obj.prototype);
console.log(func.prototype);