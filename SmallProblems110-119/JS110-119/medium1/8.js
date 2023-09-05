console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

// 1 1 2 3 5 8
function fibonacci(n) {
  fib1 = 1;
  fib2 = 1;
  let fib3;
  count = 2;
  while (count < n ) {
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
    count++;
  }
  return fib2;
}