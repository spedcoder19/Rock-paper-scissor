
const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscoreDisplay");
const computerscoreDisplay = document.getElementById("computerscoreDisplay");
let computerScore = 0;
let playerScore = 0;


function Playgame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = ""

    if(computerChoice === playerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "paper") ? "YOU LOSE!" : "YOU WIN!";
                break;
            case "paper":
                result = (computerChoice === "scissor") ? "YOU LOSE!" : "YOU WIN!";
                break;
            case "scissor":
                result = (computerChoice === "rock") ? "YOU LOSE" : "YOU WIN"
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            playerScore++;
            playerscoreDisplay.textContent = `Player: ${playerScore}`
            break;
        case "YOU LOSE!":
            computerScore++;
            computerscoreDisplay.textContent = `Computer: ${computerScore}`
            break;
    }
        



}