/*
{
  1: false
  2: false
  3: false
  4: false
  5: false
}

starting index = 1
countBy = 1

while (starting index < switches) {

for (let i = starting index; i < switches; i += countBy) {
  obj[i] = !obj[i];
}
startingindex ++
countby++
}
*/


function lightsOn(switches) {
  let lightsArray = [];
  lightsArray.length = switches;
  lightsArray.fill(false);

  let startingIndex = 0;
  let countBy = 1;

  while (startingIndex < switches) {
    for (let index = startingIndex; index < lightsArray.length; index += countBy) {
      lightsArray[index] = !lightsArray[index]
    }
    startingIndex++;
    countBy++;
  }
  
  let lightsOnArray = [];
  lightsArray.forEach((light, index) => {
    if (light) {
      lightsOnArray.push(index + 1);
    }
  })

  return lightsOnArray;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]