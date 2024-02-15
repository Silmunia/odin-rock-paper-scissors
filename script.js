
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
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (playerChoice === PAPER) {
        if (computerChoice === SCISSORS) {
            return "You lose! Scissors beat paper.";
        } else {
            return "You win! Paper beats rock.";
        }
    } else if (playerChoice === SCISSORS) {
        if (computerChoice === ROCK) {
            return "You lose! Rock beats scissors.";
        } else {
            return "You win! Scissors beat paper.";
        }
    }
}

const gameOptions = document.querySelector('#options');

gameOptions.addEventListener('click', (event) => {
    const playerChoice = event.target;

    const computerChoice = getComputerChoice();

    const result = playRound(playerChoice.id.toUpperCase(), computerChoice);

    const resultList = document.querySelector('#results')

    const newListItem = document.createElement('li');
    newListItem.textContent = result;

    resultList.appendChild(newListItem);
})