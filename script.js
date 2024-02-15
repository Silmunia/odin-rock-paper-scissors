
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

function getComputerChoice() {
    let choice = Math.random() * 100;

    if (choice <= 33) {
        return ROCK;
    } else if (choice > 66) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (playerChoice === ROCK) {
        if (computerChoice === PAPER) {
            computerScore += 1;
            return "You lose! Paper beats rock.";
        } else {
            playerScore += 1;
            return "You win! Rock beats scissors.";
        }
    } else if (playerChoice === PAPER) {
        if (computerChoice === SCISSORS) {
            computerScore += 1;
            return "You lose! Scissors beat paper.";
        } else {
            playerScore += 1;
            return "You win! Paper beats rock.";
        }
    } else if (playerChoice === SCISSORS) {
        if (computerChoice === ROCK) {
            computerScore += 1;
            return "You lose! Rock beats scissors.";
        } else {
            playerScore += 1;
            return "You win! Scissors beat paper.";
        }
    }
}

function updateResultInterface(result) {
    const newListItem = document.createElement('li');
    newListItem.textContent = result;

    resultList.appendChild(newListItem);

    playerScoreUI.textContent = "Player Score: " + playerScore;
    computerScoreUI.textContent = "Computer Score: " + computerScore;
}

function endGame() {
    gameActive = false;

    const gameBody = document.querySelector('body');

    const endMessage = document.createElement('h1');
    endMessage.textContent = playerScore === 5 ? 'Player wins!' : 'Computer wins!';

    gameBody.appendChild(endMessage);
}

let gameActive = true;

let playerScore = 0;
let computerScore = 0;

const gameOptions = document.querySelector('#options');
const resultList = document.querySelector('#results');
const playerScoreUI = document.querySelector('#player-score');
const computerScoreUI = document.querySelector('#computer-score');

gameOptions.addEventListener('click', (event) => {

    if (!gameActive) {
        return;
    }

    const playerChoice = event.target;

    const computerChoice = getComputerChoice();

    const result = playRound(playerChoice.id.toUpperCase(), computerChoice);

    updateResultInterface(result);

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
})