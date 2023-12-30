class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }



  hammingDistance(newSequence) {
    let shorterLength = this.sequence.length;
    if (newSequence.length < this.sequence.length) {
      shorterLength = newSequence.length;
    }

    let mutations = 0;

    for (let index = 0; index < shorterLength; index++) {
      if (this.sequence[index] !== newSequence[index]) {
        mutations += 1;
      }
    }

    return mutations;
  }
}

module.exports = DNA;