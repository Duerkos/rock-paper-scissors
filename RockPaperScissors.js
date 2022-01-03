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

let computerScore = document.querySelector("#computerScore");
let playerScore = document.querySelector("#playerScore");
let computerWins = 0;
let playerWins = 0;


const buttonalerts = document.querySelectorAll('.playerButton');
buttonalerts.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      game(button.id);
    });
  });

function game(playerSelection){
    //this removes the preload class that avoided transitions on the start
    document.body.classList.remove("preload");
    let winner;
        let computerSelection = computerPlay();
        winner = playRound(playerSelection, computerSelection);
        computerDiv.classList.remove("backgroundRed");
        playerDiv.classList.remove("backgroundRed");
        switch (winner) {
            case "player":
                playerScore.textContent = ++playerWins;
                computerDiv.classList.add("backgroundRed");
                textOutput.textContent = (`You Win! ${playerSelection} beats ${computerSelection}`);
                break;
            case "computer":
                computerScore.textContent = ++computerWins;
                playerDiv.classList.add("backgroundRed");
                textOutput.textContent = (`You Lose! ${computerSelection} beats ${playerSelection}`);
                break;
            case "tables":
                textOutput.textContent = (`Tables! Both chose ${computerSelection}`);
                break;
        }
    if (max(computerWins, playerWins) >= 5){
        if (computerWins > playerWins) winComputer();
        else winPlayer();
        document.querySelector(".score").remove();
        let winDiv = createWinDiv();
        winDiv.textContent = ((computerWins < playerWins) ? `You win the game!! ${playerWins} vs ${computerWins}` : `Computer won the game ${computerWins} vs ${playerWins}`);
        //hide buttons! well remove them lol, maybe we can readd them or just refresh
        //need to do more things here


    }
}
function winComputer(){
    document.querySelector(".left").remove();
    document.querySelector("#computerChoice").remove();
}


function winPlayer(){
    document.querySelector(".right").remove();
    document.querySelector(".buttonsContainer").remove();
}
function createWinDiv(){
    let winDiv = document.createElement("div");
    let replayButton = document.createElement("button");
    replayButton.textContent = "Replay";
    replayButton.classList.add("playerButton");
    replayButton.addEventListener('click', () => {
        location.reload();
      });

    winDiv.classList.add("winText");
    
    textOutput.parentElement.append(winDiv);
    document.querySelector(".halfContainer").append(replayButton);
    

    return winDiv;
}

function max(a,b) {
     return (a > b) ? a : b;
}