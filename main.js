function getComputerChoice() {
    return options[Math.floor(Math.random()*3)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        console.log("It's a Tie!");
    };
    elif (playerSelection.toLowerCase() == 'rock') {
        switch (computerSelection) {
            case 'paper':
                console.log("You Lose! Paper beats Rock");
                break;
            case 'scissors':
                console.log("You Win! Rock beats Scissors");
                break;
        };
    };

};

const options = ['rock', 'paper', 'scissors'];

const playerSelection = "rock";
const computerSelection = getComputerChoice();
