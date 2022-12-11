const rock = docuement.querySelector('.rock');
const paper = docuement.querySelector('.paper');
const scissors = docuement.querySelector('.scissors');
const computerSelection = '';

rock.addEventListener('click', () =>{
    computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
});

paper.addEventListener('click', () =>{
    computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
});

scissors.addEventListener('click', () =>{
    computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
});

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == "rock") {
        if(computerSelection == "scissors") 
            return 1;
        else if(computerSelection == "paper")
            return -1;
        else
            return 0;
    }

    if(playerSelection == 'paper') {
        if(computerSelection == "rock") 
            return 1;
        else if(computerSelection == "scissors")
            return -1;
        else
            return 0;
    }

    if(playerSelection == 'scissors') {
        if(computerSelection == "paper") 
            return 1;
        else if(computerSelection == "rock")
            return -1;
        else
            return 0;
    }
}

function game() {
    let score = 0;
    let game = 0;
    let playerSelection;
    let computerSelection;

    for(let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("What will you play?", "");

        game = (playRound(playerSelection, computerSelection));

        if(game == 1) {
            console.log("Good job! You've won, " + playerSelection + " beats " + computerSelection + "!");
        } else if(game == -1) {
            console.log("Oh no! You've lost, " + computerSelection + " beats " + playerSelection + "!");
        } else {
            console.log("Uh-oh! It's a draw, " + playerSelection + " vs " + computerSelection + "!");
        }

        score = score + game;
    }

    if(score > 0) {
        console.log("Congratulations! You've won against the A.I.!");
    } else if(score < 0) {
        console.log("Uh oh! It seems you have lost...");
    } else
        console.log("Welp... It's a draw... How boring...");
}