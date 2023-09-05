let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

function countOccurrences(arr) {
  let obj = {}
  arr.forEach(vehicle => {
    if (!obj.hasOwnProperty(vehicle)) {
      obj[vehicle] = 1;
    } else {
      obj[vehicle] += 1;
    }
  })
  for (const key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}
