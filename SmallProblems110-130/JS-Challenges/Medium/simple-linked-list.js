class Element {
  constructor(data, nextElement) {
    this.data = data;
    this.nextElement = nextElement;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.nextElement === undefined;
  }

  next() {
    return this.isTail() ? null : this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  static fromArray(array) {
    if ((array === null) || (array.length === 0)) {
      return new SimpleLinkedList();
    }

    let convertedList = new SimpleLinkedList();
    for (let index = array.length - 1; index >= 0; index--) {
      convertedList.push(array[index]);
    }

    return convertedList;
  }

  toArray() {
    let newArray = [];
    this.list.forEach(element => newArray.push(element.datum()));
    return newArray;
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(element) {
    if (this.isEmpty()) {
      this.list.push(new Element(element));
    } else {
      this.list.unshift(new Element(element, this.head()))
    }
  }

  peek() {
    return this.size() === 0 ? null : this.list[0].datum();
  }

  head() {
    return this.list[0];
  }

  pop() {
    return this.list.shift().datum();
  }
}

module.exports = {
  Element,
  SimpleLinkedList
}