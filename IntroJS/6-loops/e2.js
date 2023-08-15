function factorial(n) {
  if (n < 3) return n;
  
  let result = n;
  for (let i = 1; i <= n; i++) {
    n--
    result *= n;
  }

  return result
  
} 

console.log(factorial(5))

