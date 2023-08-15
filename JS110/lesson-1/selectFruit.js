function selectFruit(obj) {
  let fruits = {};

  for (const food in obj) {
    if (obj[food] === 'Fruit') {
      fruits[food] = 'Fruit';
    }
  }

  return fruits;
}


let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(produce);