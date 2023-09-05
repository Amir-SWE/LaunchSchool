const readline = require('readline-sync');

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  isAce() {
    return this.rank[0] === 'A';
  }

  isFaceCard() {
    switch (this.rank[0]) {
      case 'J': return true;
      case 'Q': return true;
      case 'K': return true;
      default: return false;
    }
  }

  points() {
    if (this.isAce()) {
      return 11;
    } 
    return this.isFaceCard() ? 10 : parseInt(this.rank, 10);
  }

  show() {
    return `${this.rank}${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }

  static ALL_RANKS = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
  ];
  static ALL_SUITS = ['♠️', '♣️', '♦️', '♥️'];

  initialize() {
    Deck.ALL_SUITS.forEach(suit => {
      Deck.ALL_RANKS.forEach(rank => {
        this.cards.push(new Card(rank, suit));
      })
    })
  }

  shuffle() {
    for (let index = this.cards.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
      [this.cards[index], this.cards[otherIndex]] = [this.cards[otherIndex], this.cards[index]]; // swap elements
    }
  }

  deal() {
    return this.cards.shift();
  }
}

class Participant {
  constructor() {
    this.cards = [];
  }

  totalPoints() {
    let total = this.cards.reduce((sum, card) => sum + card.points(), 0);

    this.cards.filter(card => card.isAce()).forEach(_ => {
      if (total > TwentyOneGame.GAME_NUMBER) total -= 10;
    });
    return total;
  }

  isBusted() {
    return this.totalPoints() > TwentyOneGame.GAME_NUMBER;
  }
}

class Player extends Participant {
  constructor(money) {
    super();
    this.money = money;
  }

  static RICH = 10;
  static BROKE = 0;

  showCards() {
    return this.cards.reduce((str, card) => str + `|${card.show()}| `, '');
  }

  showMoney() {
    return `Bank: $${this.money}`
  }

  lostMoney() {
    this.money++;
  }

  madeMoney() {
    this.money--;
  }

  isBroke() {
    return this.money >= Player.RICH;
  }

  isRich() {
    return this.money <= Player.BROKE;
  }
}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?

  constructor() {
    super();
    this.hide = true;
    //STUB
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards? Bow tie?
  }

  showCards() {
    return `|${this.hide ? '--' : this.cards[0].show()}| ` +
      this.cards.slice(1).reduce((str, card) => str + `|${card.show()}| `, '');
  }
}

class TwentyOneGame {
  constructor() {
    this.deck = new Deck();
    this.player = new Player(5);
    this.dealer = new Dealer();
  }

  static GAME_NUMBER = 21;
  static DEALER_CUTOFF = 17;

  start() {
    this.displayWelcomeMessage();

    while (true) {
      this.prepareDeckForDeal();
      this.resetCards();

      this.dealDealer(2);
      this.dealPlayer(2);
      this.showCards();
    
      this.playerTurn();
      this.dealerTurn();

      this.displayResult();
      if (!this.playAgain()) break;

      if (this.player.isBroke() || this.player.isRich()) break;

    }

    this.displayGoodbyeMessage();
  }

  playAgain() {
    console.log("Press the enter key to play again (or press 'q' to quit the game).")
    let answer = readline.question();
    if (answer === 'q') return false;
    return true;
  }

  prepareDeckForDeal() {
    this.deck.initialize();
    this.deck.shuffle();
  }

  resetCards() {
    this.player.cards = [];
    this.dealer.cards = [];
  }

  dealDealer(numberOfCards = 1) {
    for (let idx = 1; idx <= numberOfCards; idx++) {
      this.dealer.cards.push(this.deck.deal())
    }
  }

  dealPlayer(numberOfCards = 1) {
    for (let idx = 1; idx <= numberOfCards; idx++) {
      this.player.cards.push(this.deck.deal())
    }
  }

  showCards() {
    console.clear();
    console.log('');
    console.log('Dealer Cards: ' + this.dealer.showCards());
    console.log('');
    console.log('Your cards:   ' + this.player.showCards() + `Total: ${this.player.totalPoints()}`);
    console.log('');
    console.log(this.player.showMoney());
    console.log('');
  }

  playerTurn() {
    while (true) {
      console.log("(h)it or (s)tay?")
      let answer = readline.question();
      if (answer === 's' || this.player.isBusted()) break;
      else if (answer === 'h') {
        this.dealPlayer();
        this.showCards();
        if (this.player.isBusted()) break;
      } else {
        console.log("Sorry, must enter 'h' or 's'.");
      }
    }
  }

  dealerTurn() {
    if (!this.player.isBusted()) {
      while (this.dealer.totalPoints() < 17) {
        this.dealDealer();
        this.showCards();
      }
    }
  }

  displayResult() {
    this.dealer.hide = false;
    this.showCards();
    if (this.player.isBusted()) {
      console.log('Bust! Dealer wins.');
    } else if (this.dealer.isBusted()) {
      console.log('Dealer Busts! You win!');
    } else {
      console.log(`You stayed at ${this.player.totalPoints()}.`);
      console.log(`Dealer total is ${this.dealer.totalPoints()}.`);
      console.log(this.determineWinner())
    }
  }

  determineWinner() {
    if (this.player.totalPoints() > this.dealer.totalPoints()) {
      return 'You win!';
    } else if (this.player.totalPoints() < this.dealer.totalPoints()) {
      return 'Dealer wins.';
    } else {
      return "It's a tie!";
    }
  }

  displayWelcomeMessage() {
    while (true) {
      console.clear();
      console.log("Welcome to the Twenty-One game!");
      console.log("")
      console.log("On your turn, hit to deal another card or stay to stop dealing.")
      console.log("Get a higher point total than the dealer without going over 21 points.")
      console.log("Face cards are 10 points, aces are 1 or 11 points, all other cards are worth their rank.")
      console.log("You have $5 to start!");
      readline.question('Press the enter key to start the game.');
      break;
    }
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Twenty-One!")
  }

}

let game = new TwentyOneGame();
game.start();