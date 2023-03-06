function getComputerChoice() {
    return options[Math.floor(Math.random()*3)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        console.log("It's a Tie!");
    }
    else if (playerSelection.toLowerCase() == 'rock') {
        switch (computerSelection) {
            case 'paper':
                console.log("You Lose! Paper beats Rock");
                break;
            case 'scissors':
                console.log("You Win! Rock beats Scissors");
                break;
        };
    }
    else if (playerSelection.toLowerCase() == 'paper') {
        switch (computerSelection) {
            case 'scissors':
                console.log("You Lose! Scissors beats Paper");
                break;
            case 'rock':
                console.log("You Win! Paper beats Rock");
                break;
        };
    }
    else if (playerSelection.toLowerCase() == 'scissors') {
        switch (computerSelection) {
            case 'rock':
                console.log("You Lose! Rock beats Scissors");
                break;
            case 'paper':
                console.log("You Win! Scissors beats Paper");
                break;
        };
    };

};

const options = ['rock', 'paper', 'scissors'];

const playerSelection = "rock";
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection)