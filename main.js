// Functions
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    }
    else if (playerSelection == 'rock') {
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
    else if (playerSelection == 'paper') {
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
    else if (playerSelection == 'scissors') {
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

function getPlayerChoice(e) {
    const playerSelection = e.target.className;
    console.log(playerSelection)
};


let score = 0;

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice);
    (button.className, getComputerChoice);
});











// function game() {
//     score = 0 // Res et score each time
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Enter your choice: ").toLowerCase();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//         console.log('Current score:', score)

//     }
//     console.log(`Your Final Score is: ${score}`)
// }