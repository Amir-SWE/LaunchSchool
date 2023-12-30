class BeerSong {
  static verse(num) {
    return `${BeerSong.oneVerse(num)}\n`;
  }

  static verses(num1, num2) {
    let wholeVerse = '';

    for (let verse = num1; verse >= num2; verse--) {
      if (verse === num2) {
        wholeVerse += `${BeerSong.oneVerse(verse)}\n`
      } else {
        wholeVerse += `${BeerSong.oneVerse(verse)}\n\n`;
      }
    }

    return wholeVerse;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }

  static oneVerse(num) {
    if (num === 0) {
      return "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.";
    } else if (num === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles " +
      "of beer on the wall.";
    } else if (num === 2) {
      return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around, 1 bottle of beer " +
      "on the wall.";
    } else {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
      `Take one down and pass it around, ${num - 1} bottles of beer on the wall.`;
    }
  }
}

console.log(BeerSong.verses(99, 98));

module.exports = BeerSong;