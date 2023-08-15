let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let colorsAndSizes = [];

for (const fruit in obj) {
  obj[fruit].type === 'fruit' ? 
    colorsAndSizes.push(obj[fruit].colors.map(color => color[0].toUpperCase() + color.slice(1))) : 
    colorsAndSizes.push(obj[fruit].size.toUpperCase());
};

console.log(colorsAndSizes);
