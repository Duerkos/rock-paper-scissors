function computerPlay() {
    let play = Math.random()*3
    if (play < 1) return "rock";
    else if (play < 2) return "paper";
    else return "scissors";
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

function game(){
    let computerWins = 0;
    let playerWins = 0;
    let winner;
    
    while (max(computerWins, playerWins) < 5){
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        winner = playRound(playerSelection, computerSelection);
        switch (winner) {
            case "player":
                playerWins++;
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                break;
            case "computer":
                computerWins++;
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                break;
            case "tables":
                console.log(`Tables! Both chose ${computerSelection}`);
                break;
        }
    }
    console.log((computerWins < playerWins) ? `You win the game: ${playerWins} vs ${computerWins}` : `Computer won the game: ${computerWins} vs ${playerWins}`)
}

function max(a,b) {
     return (a > b) ? a : b;
}

function playerPlay() {
   // get player selection somehow
   return prompt("Give me rock, paper or scissors.");
}