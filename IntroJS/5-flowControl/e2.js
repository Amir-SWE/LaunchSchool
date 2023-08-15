function evenOrOdd(n) {
  if (Number.isInteger(n)) {
    if ((n % 2) === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('Number is not an integer')
    return
  }

}

evenOrOdd(56.112);