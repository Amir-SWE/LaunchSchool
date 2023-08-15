// Compute and display the total age of the male members of the family
// filter by male members -> compute total age

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAge = Object.values(munsters).filter(obj => obj.gender === 'male')
   .reduce((sum, obj) => sum + obj.age, 0);

console.log(totalAge);