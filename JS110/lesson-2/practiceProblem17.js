// 32 characters (0-9 and a-f)
// 8-4-4-4-12 pattern

const UUID_CHAR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

function randomUUIDChar() {
  let rand = Math.floor(Math.random() * UUID_CHAR.length);
  return UUID_CHAR[rand];
}

function pickAnyUUID(n) {
  let uuid = '';
  for (i = 1; i <= n; i++) {
    uuid += randomUUIDChar();
  }
  return uuid;
}

function createUUID() {
  return pickAnyUUID(8) + '-' + pickAnyUUID(4) + '-' + 
    pickAnyUUID(4) + '-' + pickAnyUUID(4) + pickAnyUUID(12);
}

console.log(createUUID());