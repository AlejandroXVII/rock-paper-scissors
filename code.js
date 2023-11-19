
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

function playOneRound(input){
    numVictories=2;
    if ((computerWins<numVictories) & (playerWins<numVictories)){
        let computerInput = getComputerChoice();
        let result = playRound(input,computerInput);
        console.log("The computer has select ",computerInput," and you ",input," so ",result); 
        let reportText=("The computer has select "+computerInput+" and you "+input+" so "+result);
        createMSJ(reportText);      
    }
    
    function createMSJ(Text){
        const zoneForResults = document.querySelector('#zoneForResults');
        const currentScore= document.createElement('p');
        currentScore.classList.add('currentScore');
        currentScore.textContent = Text;    
        zoneForResults.appendChild(currentScore);
    }
    
    if (computerWins===numVictories){
        reportText=("SCORE:\n Ties: "+ties+" Player wins: "+playerWins+" Computer wins: "+computerWins);
        reportText=(reportText+"\nThe COMPUTER has been the winner END TO THE GAME");
        createMSJ(reportText);
        playerWins=playerWins+5;
    }
    if (playerWins===numVictories){
        reportText=("SCORE:\n Ties: "+ties+" Player wins: "+playerWins+" Computer wins: "+computerWins);
        reportText=(reportText+"The PLAYER has been the winner, END TO THE GAME");
        createMSJ(reportText);
        playerWins=playerWins+5;
    }

}

let btn = document.querySelectorAll('.playerBtn');

//console.log(btn)
function display() {
    let rpsBID=this.getAttribute('id');
    playOneRound(rpsBID);
}
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener('click',display);
    
}
//btn.addEventListener('click',display);
