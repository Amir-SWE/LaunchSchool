function newStack() {
  let stack = [];
  return {
    push(value) {
      stack.push(value);
    },

    pop() {
      stack.pop();
    },

    printStack() {
      stack.forEach(value => {
        console.log(value);
      })
    },
  }
}

let myStack = newStack();

myStack.printStack();

myStack.push('hello');

myStack.push(3);

myStack.printStack();

myStack.pop()

myStack.printStack();