function selectType(obj, type) {
  let produce = {};

  for (const food in obj) {
    if (obj[food] === type) {
      produce[food] = type;
    }
  }

  return produce;
}


let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectType(produce, 'Fruit'));     // => {apple: 'Fruit', pear: 'Fruit'}
console.log(selectType(produce, 'Vegetable')); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
console.log(selectType(produce, 'Meat'));      // => {}