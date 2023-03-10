// Functions
function gameOver() {
    buttons[0].disabled = 'false';
    buttons[1].disabled = 'false';
    buttons[2].disabled = 'false';
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    }
    else if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'paper':
                changeScore('computer');
                return "You Lose! Paper beats Rock";
                break;
            case 'scissors':
                changeScore('player');
                return "You Win! Rock beats Scissors";
                break;
        }
    }
    else if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'scissors':
                changeScore('computer');
                return "You Lose! Scissors beats Paper";
                break;
            case 'rock':
                changeScore('player');
                return "You Win! Paper beats Rock";
                break;
        }
    }
    else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'rock':
                changeScore('computer');
                return "You Lose! Rock beats Scissors";
                break;
            case 'paper':
                changeScore('player');
                return "You Win! Scissors beats Paper";
                break;
        }
    }

}

function changeScore(user) {
    if (user === 'player') {
        playerScore ++;
        playerScoreEle.textContent = `${playerScore}`;
        if (playerScore == 5) {
            gameOver();
        };
        
    } else if (user === 'computer') {
        computerScore ++;
        computerScoreEle.textContent = `${computerScore}`;
        if (computerScore == 5) {
            gameOver();
        };
    };
};


function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)];
}

function getPlayerChoice(e) {
    let playerSelection = e.target.className;
    console.log(playerSelection);
    let computerSelection = getComputerChoice();
    // roundResultTxt.textContent = 
    console.log(playRound(playerSelection,computerSelection));
};


// Display Running Score
let playerScoreEle = document.getElementById('player-score');
let computerScoreEle = document.getElementById('computer-score');


// Score Variables
let playerScore = 0;
let computerScore = 0;

// Event Listeners
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice);
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