// Functions
function gameOver() {
    buttons[0].disabled = 'false';
    buttons[1].disabled = 'false';
    buttons[2].disabled = 'false';

    if (playerScore > computerScore) {
        modalText.textContent = "Congratulations! You Won The Game!";
    } else {
        modalText.textContent = "You Lost The Game! Better Luck Next Time.";
    };

    modal.classList.add('open');
};

function winColor() {
    playerSelectionArea.classList.add('win-color');
    setTimeout(() => {playerSelectionArea.classList.remove('win-color')} , 300);
};

function loseColor() {
    playerSelectionArea.classList.add('lose-color');
    setTimeout(() => {playerSelectionArea.classList.remove('lose-color')} , 300);
};

function tieShake() {
    playerSelectionArea.classList.add('tie-shake');
    computerSelectionArea.classList.add('tie-shake');
    setTimeout(() => {playerSelectionArea.classList.remove('tie-shake')} , 300);
    setTimeout(() => {computerSelectionArea.classList.remove('tie-shake')} , 300);
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tieAudio.currentTime = 0;
        tieAudio.play();
        tieShake()
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

        winColor();

        winAudio.currentTime = 0; // play audio
        winAudio.play();

        if (playerScore == 5) {
            gameOver();
        };
        
    } else if (user === 'computer') {
        computerScore ++;
        computerScoreEle.textContent = `${computerScore}`;

        loseColor();

        loseAudio.currentTime = 0; // play audio
        loseAudio.play();

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
    let computerSelection = getComputerChoice();
    
    playerSelectionImg.src = `./imgs/${playerSelection}.png`;
    playerSelectionImg.width = 180;
    computerSelectionImg.src = `./imgs/${computerSelection}.png`;
    computerSelectionImg.width = 180;

    playRound(playerSelection,computerSelection);
};


// DOM Elements
let playerScoreEle = document.getElementById('player-score');
let computerScoreEle = document.getElementById('computer-score');

let playerSelectionImg = document.getElementById('player-selection');
let computerSelectionImg = document.getElementById('computer-selection');

let loseAudio = document.querySelector('.lose-audio');
let winAudio = document.querySelector('.win-audio');
let tieAudio = document.querySelector('.tie-audio');

let playerSelectionArea = document.querySelector('.player-selection-area')
let computerSelectionArea = document.querySelector('.computer-selection-area')

let modal = document.querySelector('.modal');
let modalText = document.querySelector('.modal-text');

// Score Variables
let playerScore = 0;
let computerScore = 0;

// Event Listeners
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice);
});


