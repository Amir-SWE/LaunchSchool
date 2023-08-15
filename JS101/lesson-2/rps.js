console.clear();
prompt('WELCOME TO ROCK-PAPER-SCISSORS-SPOCK-LIZARD');
prompt(`You will play a best of five against the computer!`);

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const VALID_INPUTS = VALID_CHOICES.concat('r','p','sc','sp','l');
const TARGET_SCORE = 3;

let userScore = 0;
let computerScore = 0;

// Create winning and losing objects containing each choice as a key
// Each key has corresponding winning or losing values
const WINNING_CONDITIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['paper', 'spock'],
};
const LOSING_CONDITIONS = {
  rock: ['paper', 'spock'],
  paper: ['scissors', 'lizard'],
  scissors: ['rock', 'spock'],
  spock: ['paper', 'lizard'],
  lizard: ['rock', 'scissors'],
};

// ----- FUNCTIONS -----
function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  if (WINNING_CONDITIONS[choice].includes(computerChoice)) {
    prompt(`You win! (Score: ${userScore}-${computerScore})`);
  } else if (LOSING_CONDITIONS[choice].includes(computerChoice)) {
    prompt(`Computer wins! (Score: ${userScore}-${computerScore})`);
  } else {
    prompt(`It's a tie! (Score: ${userScore}-${computerScore})`);
  }
}

function updateScore(choice, computerChoice) {
  if (WINNING_CONDITIONS[choice].includes(computerChoice)) {
    userScore += 1;
  } else if (LOSING_CONDITIONS[choice].includes(computerChoice)) {
    computerScore += 1;
  }
}

function choiceToFullWord(choice) {
  if (choice === 'r') return 'rock';
  else if (choice === 'p') return 'paper';
  else if (choice === 'sc') return 'scissors';
  else if (choice === 'sp') return 'spock';
  else if (choice === 'l') return 'lizard';
  else return choice;
}

// ----- MAIN GAME LOOP -----
while (true) {
  while ((userScore < TARGET_SCORE) && (computerScore < TARGET_SCORE)) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question().toLowerCase();

    while (choice === 's') {
      prompt("Do you want to choose scissors or spock?");
      choice = readline.question();
    }

    while (!VALID_INPUTS.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    choice = choiceToFullWord(choice);

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    updateScore(choice, computerChoice);
    displayWinner(choice, computerChoice);
  }

  prompt (`You ${userScore === TARGET_SCORE ? 'won' : 'lost'} the best of five by a score of ${userScore} to ${computerScore}.`);

  prompt('Would you like to play another best of five? y/n');
  let playAgain = readline.question().toLowerCase();
  if (playAgain !== 'y') break;

  userScore = 0;
  computerScore = 0;
}