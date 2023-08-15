** Problem **

Input: Number of cubes
Output: Number of cubes left over after building tallest possible structure

Rules
  Explicit:
    - Top layer must be a single block
    - Top layer blocks must be supported by four lower level blocks
  Implicit:
    - The smallest possible structure must be at least 5 cubes

Smallest possible structure: 1 cube

2nd Smallest possible strucure (5 cubes (4+1), 2 layers):
  top view:
  [][]
  [][] 
  side view:
   []
  [][]

3rd smallest (14 cubes (9+4+1), 3 layers):
  top view:
  [][][]
  [][][]
  [][][]
  side view:
    []
   [][]
  [][][]  

4th smallest (30 cubes (16+9+4+1), 4 layers):
  top view:
  [][][][]
  [][][][]
  [][][][]
  [][][][]
  side view:
     []
    [][]
   [][][] 
  [][][][]  

** Test Cases **
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

** Data Structures **
- Not necessary

** Algorithm **
1. Determine how many layers can be made with given number of cubes
  a. start with the array [1]
  b. Build an array which represent the total number of cubes needed to build a 
    structure up to that layer, ex: [1, 5, 14, 30]
      - array can be built by adding square of loop iteration to last number
  c. stop the array when the last number of the array becomes larger than given number of cubes
  d. remove the last number in the array
  e. extract the last value of the array (this is equal to used cubes)
2. Subtract used cubes from given cubes and return that value

Test Case (6):
0. check if input is 0 and return 0 if it is
1. 
  a. [1]
  b. array of squares: [1, 5, 14]
  c. [1, 5, 14]
  d. [1, 5]
  e. 5
2. 6 - 5 = 1
