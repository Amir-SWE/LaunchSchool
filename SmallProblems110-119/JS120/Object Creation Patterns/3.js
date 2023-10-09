class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.buffer = new Array(this.bufferSize).fill(null);
    this.countArray = new Array(this.bufferSize).fill(Infinity);
    this.queueCount = 1;
  }

  isEmpty() {
    return this.buffer.every(pos => pos === null);
  }

  isFull() {
    return this.buffer.every(pos => pos !== null);
  }

  addToCountArray(index) {
    this.countArray[index] = this.queueCount;
  }

  removeFromCountArray(index) {
    this.countArray[index] = Infinity;
  }

  addOneToCount() {
    this.queueCount++;
  }

  findOldestIndex() {
    return this.countArray.indexOf(Math.min(...this.countArray));
  }

  enqueue(object) {
    if (this.isFull()) {
      this.buffer[this.findOldestIndex()] = object;
      this.addToCountArray(this.findOldestIndex());
      this.addOneToCount();
    } else {
      for (let idx = 0; idx <= this.buffer.length; idx++) {
      if (this.buffer[idx] === null) {
        this.buffer[idx] = object;
        this.addToCountArray(idx);
        this.addOneToCount();
        break;
        }
      }
    }
  }

  dequeue() {
    if(this.isEmpty()) return null;
    let oldest = this.buffer[this.findOldestIndex()];
    this.buffer[this.findOldestIndex()] = null;
    this.removeFromCountArray(this.findOldestIndex());
    return oldest;
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);



let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
