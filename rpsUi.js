const inputs = ['rock','paper','scissors'];
var winners = [];

function getComputerChoice() {
    const computerOptions = inputs;
    // using the Math.random() function with Math.floor() 
    // to generate random integer, which will be used as 
    // an index to the array.
     let index = Math.floor(Math.random()*3);
     return computerOptions[index];
}

function playerSelection(){
    let handShape = document.querySelector('button').id;
    // console.log(handShape);
    return handShape;
}

//The checkWinner function makes the game to compare between
// the user and computer input,
// to determine who wins, loses or ties
function checkWinner(user,computer){
    if (user === computer){
      return "tie";
    }
    else if(
      (user==="rock" && computer==="scissors") ||
      (user==="paper" && computer==="rock") ||
      (user==="scissors" && computer==="paper")
      ){
      return "user";
    }
    else{
      return "computer";
    }
  }

const buttons =  document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));  

const output = document.querySelector('.output');
const pScores = document.querySelector('#playerId');
const cScores = document.querySelector('#computerId');
const finalResult = document.querySelector('#finalResult');
const play = document.querySelector('#playAgain');


function outputRoundScore(winner){
    let Victory = winners.filter((win) => win == winner).length;
    
    if(winner == "user"){
        pScores.textContent = Victory;
    }
    else if(winner == "computer"){
        cScores.textContent = Victory;
    }
    displayWinner();
}

function playRound(){
    const player = playerSelection();
    const computer = getComputerChoice();
    const winner = checkWinner(player,computer);
    winners.push(winner);
    if(winner == 'user'){
        output.textContent = "Player Won";
    }
    else if(winner == 'computer'){
        output.textContent = "Computer Won";
    }
    else{
        output.textContent = "Ties";
    }
   outputRoundScore(winner);
  }  

function displayWinner(){
    if(pScores.textContent == 5){
        finalResult.textContent = "You Won";
        disableButtons();
        output.textContent = "";
    }
    else if(cScores.textContent == 5){
        finalResult.textContent = "Computer Won";
        disableButtons();
        output.textContent = "";
    }
}

function resetGame(){
    finalResult.textContent = "";
    output.textContent = "Play Now";
    pScores.textContent = 0;
    cScores.textContent = 0;
    winners = [];
    enableButtons();
}

play.addEventListener('click',resetGame);

function disableButtons(){
    buttons.forEach(button => button.classList.add('showButton'));
}
function enableButtons(){
    buttons.forEach(button => button.classList.remove('showButton'));
}