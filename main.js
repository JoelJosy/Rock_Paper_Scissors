function getComputerChoice() {
    return options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        console.log("It's a Tie!")
    }

}

const options = ['rock', 'paper', 'scissors']

const playerSelection = "rock";
const computerSelection = getComputerChoice();
