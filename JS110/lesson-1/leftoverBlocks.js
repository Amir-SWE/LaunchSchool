// ** Algorithm **
// 1. Determine how many layers can be made with given number of cubes
//   a. start with the array [1]
//   b. Build an array which represent the total number of cubes needed to build a 
//     structure up to that layer, ex: [1, 5, 14, 30]
//       - array can be built by adding square of loop iteration to last number
//   c. stop the array when the last number of the array becomes larger than given number of cubes
//   d. remove the last number in the array
//   e. extract the last value of the array (this is equal to used cubes)
// 2. Subtract used cubes from given cubes and return that value


function calculateLeftoverBlocks(blocks) {
  if (blocks === 0) return 0;
  if (blocks === 1) return 0;

  let numberOfBlocksPerLayer = buildBlocksArray(blocks);
  return blocks - numberOfBlocksPerLayer[numberOfBlocksPerLayer.length - 1];
}

function buildBlocksArray(blocks) {
  let blocksArray = [1];
  for (layer = 2; blocksArray[blocksArray.length - 1] <= blocks; layer++) {
    blocksArray.push(blocksArray[layer - 2] + (layer*layer));
  }
  blocksArray.pop()
  return blocksArray;
}


console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true