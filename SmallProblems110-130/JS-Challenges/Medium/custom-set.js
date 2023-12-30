class CustomSet {
  constructor(set = []) {
    this.set = set;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  isSubset(newSet) {
    if (this.isEmpty()) {
      return true;
    } else if (newSet.isEmpty()) {
      return false
    }

    return this.set.every(element => newSet.set.includes(element));
  }

  isDisjoint(newSet) {
    if (this.isEmpty() || newSet.isEmpty()) return true;
    return this.set.every(element => !newSet.set.includes(element));
  }

  isSame(newSet) {
    if (newSet.set.length !== this.set.length) return false;
    let isSame = true;
    let sorted1 = this.set.sort();
    let sorted2 = newSet.set.sort();
    this.set.forEach((element, i) => {
      if (this.set[i] !== newSet.set[i]) {
        isSame = false;
      }
    })
    return isSame;
  }

  add(element) {
    if (!this.set.includes(element)) {
      this.set.push(element);
    }
    return this;
  }

  intersection(newSet) {
    if (this.isEmpty() || newSet.isEmpty()) {
      return new CustomSet();
    }
    let sharedElements = [];
    this.set.forEach(element => {
      if (newSet.set.includes(element)) {
        sharedElements.push(element);
      }
    })
    return new CustomSet(sharedElements);
  }

  difference(newSet) {
    if (this.isEmpty()) return new CustomSet();
    let differentElements = [];
    this.set.forEach(element => {
      if (!newSet.set.includes(element)) {
        differentElements.push(element);
      }
    })
    return new CustomSet(differentElements);
  }

  union(newSet) {
    let unionSet = this;
    newSet.set.forEach(element => {
      unionSet = unionSet.add(element);
    })
    return unionSet;
  }
}

module.exports = CustomSet;