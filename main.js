function getComputerChoice() {
    return options[Math.floor(Math.random()*3)]
}

const options = ['Rock', 'Paper', 'Scissors']

getComputerChoice()