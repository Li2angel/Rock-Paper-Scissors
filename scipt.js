function getComputerChoice() {
    const computerOptions = ['rock','paper','scissors'];
    // using the Math.random() function with Math.floor() 
    // to generate random integer, which will be used as 
    // an index to the array.
     let index = Math.floor(Math.random()*3);
     return computerOptions[index];
}

function playerSelection(){
    let handShape = prompt("Enter your hand shape!");
    if (handShape.toLowerCase() === "rock"){
      return handShape.toLowerCase();
    }
    else if (handShape.toLowerCase() === "paper"){
      return handShape.toLowerCase();
    }
    else if (handShape.toLowerCase() === "scissors"){
      return handShape.toLowerCase();
    }
    else{
      return "please enter hand shape";
    }
  }

  