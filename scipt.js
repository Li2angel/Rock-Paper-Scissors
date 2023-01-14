const inputs = ['rock','paper','scissors'];
const winners = [];

function getComputerChoice() {
    const computerOptions = inputs;
    // using the Math.random() function with Math.floor() 
    // to generate random integer, which will be used as 
    // an index to the array.
     let index = Math.floor(Math.random()*3);
     return computerOptions[index];
}

function validateInput(input){
    return inputs.includes(input);
  }

function playerSelection(){
    let handShape = prompt("Enter Rock, Paper or Scissors");
    while (handShape == null){
      handShape = prompt("Enter Rock, Paper or Scissors");
    }
    handShape = handShape.toLowerCase();
    let check = validateInput(handShape);
    while (check === false){
      handShape = prompt("Please enter Rock, Paper or Scissors");
      while (handShape == null){
        handShape = prompt("Enter Rock, Paper or Scissors");
      }
      handShape = handShape.toLowerCase();
      check = validateInput(handShape);
    }
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

function playRound(round){
  const player = playerSelection();
  const computer = getComputerChoice();
  const winner = checkWinner(player,computer);
  winners.push(winner);
  outputRound(player,computer,winner,round);
}

// The game function enables the user to play the game 5 times
function game(){
    for(let i = 0; i < 5; i++){
        playRound(i);
  }
  victory();
}

function victory(){
    let playerVictory = winners.filter((win) => win == "user").length;
    let computerVictory = winners.filter((win) => win == "computer").length;
    let tie = winners.filter((win) => win == "tie").length;

    console.log("####################");
    console.log("Player Won : "+playerVictory+" times");
    console.log("Computer Won : "+computerVictory+" times");
    console.log("Ties : "+tie+" times");
}

function outputRound(pChoice,cChoice,winner,round){
    console.log("Round ", round);
    console.log("Player Choose : ", pChoice);
    console.log("Computer Choose : ", cChoice);
    console.log(winner, " won the Round");
}

game();

  

