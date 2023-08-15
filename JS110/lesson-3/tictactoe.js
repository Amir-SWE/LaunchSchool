const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
]
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const SCORE_TO_WIN = 5;
//const GO_FIRST = 'player';

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};
  for (let i = 1; i <= 9; i++) {
    board[i] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, delimiter, lastElementJoiner) {
  if (arr.length === 0) return '';
  if (arr.length === 1) return String(arr[0]);

  let finalString = '';
  for (let i = 0; i < arr.length - 1; i++) {
    finalString += arr[i].concat(delimiter);
  }
  return finalString + lastElementJoiner + ' ' + arr[arr.length - 1];
}

function playerChoosesSquare(board) {
  let square;

  while(true) {
    prompt(`Choose a square ${joinOr(emptySquares(board),', ', 'or')}:`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;
    
    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(board, marker = HUMAN_MARKER) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    let [sq1, sq2, sq3] = WINNING_LINES[i];
    if (
      board[sq1] === ' '    &&
      board[sq2] === marker &&
      board[sq3] === marker
    ) {
      return sq1;
    } else if (
      board[sq1] === marker &&
      board[sq2] === ' '    &&
      board[sq3] === marker
    ) {
      return sq2;
    } else if (
      board[sq1] === marker &&
      board[sq2] === marker &&
      board[sq3] === ' '
    ) {
      return sq3;
    }
  }
  return null;
}

function computerChoosesSquare(board) {
  if (findAtRiskSquare(board, COMPUTER_MARKER)) {
    board[findAtRiskSquare(board, COMPUTER_MARKER)] = COMPUTER_MARKER;
  } else if (findAtRiskSquare(board)) {
    board[findAtRiskSquare(board)] = COMPUTER_MARKER;
  } else if (board['5'] === ' ') {
    board['5'] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    let [sq1, sq2, sq3] = WINNING_LINES[i];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
  ) {
    return 'Player';
  } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
  ) {
    return 'Computer';
  }
}
return null;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'player') {
    return 'computer';
  } 
  return 'player';
}

while (true) {

  let humanScore = 0;
  let computerScore = 0;

  while (true) {
    let board = initializeBoard();
    prompt('Who would you like to go first? Type player(p) or computer(c).');
    let goFirst = readline.question().trim();
    let currentPlayer;
    if (goFirst === 'player' || goFirst === 'p') {
      currentPlayer = 'player';
    } else {
      currentPlayer = 'computer';
    }

    while(true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      if (detectWinner(board) === 'Player') {
        humanScore++;
      } else if (detectWinner(board) === 'Computer') {
        computerScore++;
      }
      prompt(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    } else {
      prompt("It's a tie!");
      prompt(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    }

    if (humanScore >= SCORE_TO_WIN) {
      prompt(`You won by a score of ${humanScore} to ${computerScore}!`);
      break;
    } else if (computerScore >= SCORE_TO_WIN) {
      prompt(`Computer won by a score of ${computerScore} to ${humanScore}!`);
      break;
    }

    prompt('Play again? (y or n)');
    let answer = readline.question().toLowerCase()[0];
    if (answer !== 'y') break;
  }

  prompt('Play another match? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');