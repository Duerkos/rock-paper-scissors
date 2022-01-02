const textOutput = document.querySelector("#textOutput");
const playerDiv = document.querySelector(".left");
const computerDiv = document.querySelector(".right");
const computerChoiceImage = document.querySelector("#computerChoiceImage");

function ChangeComputerImage(name){
    computerChoiceImage.src = "./img/" + name + ".jpg"
}

function computerPlay() {
    let play = Math.random()*3
    if (play < 1) {
        ChangeComputerImage("rock");
        return "rock";
    }
    else if (play < 2) {
        ChangeComputerImage("paper");
        return "paper";
    }
    else {
        ChangeComputerImage("scissors");
       return "scissors";
    }
}


function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        return "player";
    } else if (playerSelection === computerSelection) return "tables";
    else return "computer";
}

let computerWins = 0;
let playerWins = 0;
//(max(computerWins, playerWins) < 5)


const buttonalerts = document.querySelectorAll('.playerButton');
buttonalerts.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      game(button.id);
    });
  });

function game(playerSelection){
    let winner;
        let computerSelection = computerPlay();
        winner = playRound(playerSelection, computerSelection);
        computerDiv.classList.remove("backgroundRed");
        playerDiv.classList.remove("backgroundRed");
        switch (winner) {
            case "player":
                playerWins++;
                computerDiv.classList.add("backgroundRed");
                textOutput.textContent = (`You Win! ${playerSelection} beats ${computerSelection}`);
                break;
            case "computer":
                computerWins++;
                playerDiv.classList.add("backgroundRed");
                textOutput.textContent = (`You Lose! ${computerSelection} beats ${playerSelection}`);
                break;
            case "tables":
                textOutput.textContent = (`Tables! Both chose ${computerSelection}`);
                break;
        }
    // textOutput.textContent = ((computerWins < playerWins) ? `You win the game: ${playerWins} vs ${computerWins}` : `Computer won the game: ${computerWins} vs ${playerWins}`)
}

function max(a,b) {
     return (a > b) ? a : b;
}

function playerPlay() {
   // get player selection somehow
   return prompt("Give me rock, paper or scissors.");
}