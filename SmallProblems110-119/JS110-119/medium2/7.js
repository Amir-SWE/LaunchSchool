/*
input: array
output: sorted array



- while loop:
- initialize boolean swap = false

- iterate through array from index 0 to index less than array.length - 1
  - compare current index with index + 1
  - if element at current index is larger than element at index + 1:
    - swap elements
      - let tempElement = array[i];
      - array[i] = array[i + 1];
      - array[i + 1] = tempElement
      - set swapped = true
  - else: continue to next interation

- if swap = false -> break
*/

function bubbleSort(arr) {
  let swapped;
  while (true) {
    swapped = false;
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] > arr[index + 1]) {
        let tempElement = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = tempElement;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]