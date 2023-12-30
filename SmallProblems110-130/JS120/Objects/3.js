function objectsEqual(obj1, obj2) {
  for (const key1 in obj1) {
    if (!obj2.hasOwnProperty(key1)) {
      return false
    } else if (obj1[key1] !== obj2[key1]) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false