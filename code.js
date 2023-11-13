function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getComputerChoice(){
    n=getRandomInt(3);
    if(n===0)
        return "rock";
    if(n===1)
        return "paper"
    if(n===2)
        return "scissors"
}

function youWin(){
    return "you have won!"
}

function youLose(){
    return "you have lose:("
}
 
function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection)
        console.log("is a tie ")   
    else {
        if (playerSelection==="rock"){
            if (computerSelection==="scissors")
                console.log(youWin()) 
            else console.log(youLose()) 
        }
        if (playerSelection==="paper"){
            if (computerSelection==="rock")
                console.log(youWin())
            else console.log(youLose()) 
        }
        if (playerSelection==="scissors"){
            if (computerSelection==="paper")
                console.log(youWin())
            else console.log(youLose()) 
        }
    }
}

console.log(getComputerChoice());
