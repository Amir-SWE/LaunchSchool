const readline = require('readline-sync');

const GAME_NUMBER = 21;
const DEALER_CUTOFF = 17;
const STARTING_COINS = 100;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function generateDeck() {
  let deck = [];
  // insert number cards into deck
  for (let num = 2; num <= 10; num++) {
    deck.push(`${num}♠️`, `${num}♣️`, `${num}♦️`, `${num}♥️` );
  }
  // insert face cards into deck
  deck.push('A♠️', 'J♠️', 'Q♠️', 'K♠️');
  deck.push('A♣️', 'J♣️', 'Q♣️', 'K♣️');
  deck.push('A♦️', 'J♦️', 'Q♦️', 'K♦️');
  deck.push('A♥️', 'J♥️', 'Q♥️', 'K♥️');
  return deck;
}

function shuffleDeck(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function generateBoard(dealerCards, playerCards, hideDealerCard, wager, playerCoins) {
  console.log('');
  prompt(`Dealer Cards: |${hideDealerCard ? '--' : dealerCards[0]}| ${showCards(dealerCards.slice(1))}`);
  console.log('');
  prompt(`Your Cards: ${showCards(playerCards)} (Total: ${countTotal(playerCards)})`);
  console.log('');
  if (wager) console.log(`Coins: ${playerCoins}`);
  console.log('');
}

function showCards(arr) {
  return arr.reduce((str, card) => str + `|${card}| `, '');
}

function isFaceCard(card) {
  let face = card[0];
  switch (face) {
    case 'J': return true;
    case 'Q': return true;
    case 'K': return true;
    default: return false;
  }
}

function isAce(card) {
  if (card[0] === 'A') return true;
  return false;
}

function countTotal(playerCards) {
  let sum = 0;
  playerCards.forEach(card => {
    if (isFaceCard(card)) {
      sum += 10;
    } else if (isAce(card)) {
      sum += 11;
    } else {
      sum += parseInt(card);
    }
  });

  playerCards.filter(card => isAce(card)).forEach(_ => {
    if (sum > GAME_NUMBER) sum -= 10;
  });

  return sum;
}

function busted(playerCards) {
  if (countTotal(playerCards) > GAME_NUMBER) return true;
  return false;
}

function dealCard(deck, playerCards) {
  playerCards.push(deck.shift());
}

function dealTwoCards(deck, playerCards) {
  playerCards.push(deck.shift());
  playerCards.push(deck.shift());
}

function displayResult(playerCards, dealerCards) {
  if (countTotal(playerCards) > countTotal(dealerCards)) {
    prompt('You win!');
  } else if (countTotal(playerCards) === countTotal(dealerCards)) {
    prompt("It's a tie!");
  } else if (countTotal(playerCards) < countTotal(dealerCards)) {
    prompt('Dealer wins.');
  }
}

function playerWon(playerCards, dealerCards) {
  if (countTotal(playerCards) === countTotal(dealerCards)) return 'tie';
  return countTotal(playerCards) > countTotal(dealerCards);
}

function updateCoins(wager, win, playerCoins, wagerAmount) {
  if (!wager) return;
  if (win === true) {
    playerCoins +=  Number(2 * wagerAmount);
  } else if (win === 'tie') {
    playerCoins += Number(wagerAmount);
  }
  return playerCoins;
}

while (true) {
  let playerCoins = STARTING_COINS;
  let wager = false;
  console.clear();
  prompt('Welcome to Twenty-One!');
  prompt('You recieve 100 free coins.');
  prompt('You can use these coins to bet on each round, or play without betting.');
  prompt('Would you like to wager coins? (y or n)');
  let wagerAnswer = readline.question();
  if (wagerAnswer === 'y') {
    wager = true;
  }

  while (true) {
    let wagerAmount = 0;
    console.clear();
    prompt(`You now have ${playerCoins} coins.`);
    prompt('How much would you like to wager this round?');
    while (wager) {
      wagerAmount = readline.question();
      if (wagerAmount > 0 && wagerAmount <= playerCoins) {
        playerCoins -= wagerAmount;
        break;
      }
      prompt(`Invalid amount, enter a wager amount between 1 and ${playerCoins}.`);
    }

    let deck = generateDeck();
    shuffleDeck(deck);

    let dealerCards = [];
    let playerCards = [];

    dealTwoCards(deck, dealerCards);
    dealTwoCards(deck, playerCards);

    console.clear();
    generateBoard(dealerCards, playerCards, true, wager, playerCoins);

    while (true) {
      prompt("(h)it or (s)tay?");
      let answer = readline.question();
      if (answer === 's' || busted(playerCards)) break;
      else if (answer === 'h') {
        dealCard(deck, playerCards);
        console.clear();
        generateBoard(dealerCards, playerCards, true, wager, playerCoins);
        if (busted(playerCards)) break;
      } else {
        prompt("Sorry, must enter 'h' or 's'.");
      }
    }

    if (busted(playerCards)) {
      console.clear();
      playerCoins = updateCoins(wager, false, playerCoins, wagerAmount);
      generateBoard(dealerCards, playerCards, false, wager, playerCoins);
      prompt('Bust! Dealer wins.');
    } else {
      console.clear();
      generateBoard(dealerCards, playerCards, false, wager, playerCoins);

      while (true) {
        if (busted(dealerCards)) {
          console.clear();
          playerCoins = updateCoins(wager, true, playerCoins, wagerAmount);
          generateBoard(dealerCards, playerCards, false, wager, playerCoins);
          prompt("Dealer Busts! You win.");
          break;
        } else if (countTotal(dealerCards) >= DEALER_CUTOFF) {
          console.clear();
          playerCoins = updateCoins(wager, playerWon(playerCards, dealerCards), playerCoins, wagerAmount);
          generateBoard(dealerCards, playerCards, false, wager, playerCoins);
          prompt(`You stayed at ${countTotal(playerCards)}.`);
          prompt(`Dealer total is ${countTotal(dealerCards)}.`);
          displayResult(playerCards, dealerCards);
          break;
        }

        dealCard(deck, dealerCards);
        console.clear();
        generateBoard(dealerCards, playerCards, false, wager, playerCoins);
      }
    }

    if (playerCoins <= 0) break;
    prompt('Play another round? (y or n)');
    let answer = readline.question().toLowerCase()[0];
    if (answer.toLowerCase()[0] !== 'y') break;
  }

  if (wager) {
    if (playerCoins <= 0) {
      prompt('You ran out of coins. Thanks for playing!');
      break;
    }
    console.clear();
    prompt(`You ended with ${playerCoins} coins.`);
    prompt('Thanks for playing Twenty-One!');
    break;
  }

  console.clear();
  prompt('Thanks for playing Twenty-One!');
  break;
}
