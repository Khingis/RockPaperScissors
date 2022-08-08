const userChoice = document.querySelector("#userChoice");
const computerChoice= document.querySelector("#computerChoice");
const result= document.querySelector("#result");
const buttons=document.querySelectorAll(".btn");
let player;
let computer;
let getResult;

//random get 3 choice for computer
function getComputerChoice(){
    let randomNum= Math.floor(Math.random()*3);
    switch(randomNum){
       case 0:
       return "rock";
       break;
       case 1:
       return "paper";
       break;
       case 2:
       return "scissors";
       break;
    }
   }
//condition game regulation
function chooseWinner(){
    if(player===computer){
        return "The game is tie";
    }
  
   if (player === 'rock') {
    if (computer === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  if (player === 'paper') {
    if (computer === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (player === 'scissors') {
    if (computer === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  }

buttons.forEach((button)=>button.addEventListener("click",()=>{
    //to input the user click text content as argument for function chooseWinner()
    player= button.textContent;
    computer= getComputerChoice();
    // following 3 line to show the text on web
    userChoice.textContent=`User: ${player}`;
    computerChoice.textContent=`Computer: ${computer}`;
    result.textContent= chooseWinner(); 
}))
