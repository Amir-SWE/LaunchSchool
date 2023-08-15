/*
- get all transactions for given id (transactionsFor())
- for each transaction, count net movement
  - out = -quantity, in = +quantity
- sum all transaction movements
- return (sum > 0)

*/

function isItemAvailable(id, transactions) {
  let allTransactions = transactionsFor(id, transactions);
  let quantity = allTransactions.map(obj => {
    if (obj.movement === 'in') {
      return obj.quantity;
    } else {
      return obj.quantity * -1;
    }
  })
  return quantity.reduce((sum, num) => sum + num, 0) > 0;
}

function transactionsFor(id, transactions) {
  return transactions.filter(obj => obj['id'] === id);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true