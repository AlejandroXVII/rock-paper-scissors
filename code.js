
let ties = 0;
let computerWins = 0;
let playerWins = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getComputerChoice(){
    n=getRandomInt(3);
    if(n===0)
        return "rock";
    if(n===1)
        return "paper";
    if(n===2)
        return "scissors";
}

function youWin(){
    playerWins = playerWins + 1;
    return "you have won!";
}

function youLose(){
    computerWins = computerWins + 1;
    return "you have lose!";
}
 
function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection){
        ties = ties + 1;
        return "is a tie ";
    }
    else {
        if (playerSelection==="rock"){
            if (computerSelection==="scissors")
                return youWin();
            else return youLose();
        }
        if (playerSelection==="paper"){
            if (computerSelection==="rock")
                return youWin();
            else return youLose();
        }
        if (playerSelection==="scissors"){
            if (computerSelection==="paper")
                return youWin();
            else return youLose();
        }
    }
}

function playOneRound(){
    let input = window.prompt("Rock! Paper! Scissors! CHOSE!:");
    input = input.toLowerCase()
    let computerInput = getComputerChoice();
    let result = playRound(input,computerInput);
    if (( input !== "rock" ) & (input !== "paper" ) & (input !== "scissors" )) console.log("ERROR!");
    else {
        console.log("The computer has select ",computerInput," and you ",input," so ",result);
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        playOneRound();
    }
    console.log("SCORE:\n Ties: ",ties," Player wins: ",playerWins," Computer wins: ",computerWins);
    if (computerWins >= playerWins & computerWins >= ties)
        console.log("The COMPUTER has been the winner, with",computerWins," victories.");
    else{
        if (computerWins <= playerWins & playerWins >= ties)
            console.log("The PLAYER has been the winner, with",playerWins," victories.");
        else
            console.log("No one has win, this is a tie!");
    }
}

game(); 