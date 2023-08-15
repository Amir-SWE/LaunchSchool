console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

function union(arr1, arr2) {
  let combinedArray = arr1.slice();
  arr2.forEach(num => {
    if (!arr1.includes(num)) {
      combinedArray.push(num);
    }
  })

  return combinedArray;
}