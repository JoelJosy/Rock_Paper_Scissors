function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "It's a Tie!";
    }
    else if (playerSelection.toLowerCase() == 'rock') {
        switch (computerSelection) {
            case 'paper':
                return "You Lose! Paper beats Rock";
                break;
            case 'scissors':
                score ++;
                return "You Win! Rock beats Scissors";
                break;
        }
    }
    else if (playerSelection.toLowerCase() == 'paper') {
        switch (computerSelection) {
            case 'scissors':
                return "You Lose! Scissors beats Paper";
                break;
            case 'rock':
                score ++;
                return "You Win! Paper beats Rock";
                break;
        }
    }
    else if (playerSelection.toLowerCase() == 'scissors') {
        switch (computerSelection) {
            case 'rock':
                return "You Lose! Rock beats Scissors";
                break;
            case 'paper':
                score ++;
                return "You Win! Scissors beats Paper";
                break;
        }
    }

}

function game() {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(score)
}

let score = 0;

game()