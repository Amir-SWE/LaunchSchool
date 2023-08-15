/*
- initialize empty results array
- for each subarray in array
  - forEach()
- add the first element of array to results array element[1] number of times
  - initialize a counter varaible
  - while the counter is less than element[1]:
    - push element[0] to results array
    - counter = counter + 1
- return results array

*/

function buyFruit(arr) {
  let groceryList = [];
  arr.forEach(subArr => {
    let counter = 0;
    while (counter < subArr[1]) {
      groceryList.push(subArr[0]);
      counter++;
    }
  })
  return groceryList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]