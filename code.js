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
    return "you have won!";
}

function youLose(){
    return "you have lose:(";
}
 
function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection)
        return "is a tie ";
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
let input = window.prompt("Rock! Paper! Scissors! CHOSE!:");
input = input.toLowerCase()
let computerInput = getComputerChoice();
let result = playRound(input,computerInput);
if (( input !== "rock" ) & (input !== "paper" ) & (input !== "scissors" )) console.log("ERROR!");
else {
    console.log("The computer has select ",computerInput," and you ",input," so ",result);
}