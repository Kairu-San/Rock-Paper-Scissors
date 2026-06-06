// Function to pick rps
function getComputerChoice() {
  // Pick a random number 1-3
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  //If 1 Display Rock
  if (randomNumber == 1) {
    return "rock";
  }
  //ElseIf 2 DisplayPaper
  else if (randomNumber == 2) {
    return "paper";
  }
  //Else Display Scissors
  else {
    return "scissors";
  }
}

// Human choice function
function getHumanChoice() {
  //Get user input
  let humanChoice = prompt("Rock , Paper, or Scissors?");
  return humanChoice;
}

//Game Function


//Play game function loops 5 times
function playGame() {
  //Assign scores starting at 0
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    //If user picks rock
    if (humanChoice.toLowerCase() === "rock") {
      if (computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
      } else if (computerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
      } else {
        console.log("It's a tie!");
      }
    }

    //If user picks paper
    else if (humanChoice.toLowerCase() === "paper") {
      if (computerChoice == "scissors") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
      } else if (computerChoice == "rock") {
        console.log("You Win! Paper beats Rock");
        humanScore++;
      } else {
        console.log("It's a tie!");
      }
    }
    //If user picks scissors
    else {
      if (computerChoice == "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
      } else if (computerChoice == "paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
      } else {
        console.log("It's a tie!");
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    let cChoice = getComputerChoice();
    let hChoice = getHumanChoice();
    playRound(hChoice, cChoice);
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  }

  // Determine winner
  if (humanScore > computerScore) {
    alert("Congratulations! you won ");
  }
  else if (humanScore < computerScore) {
    alert("Better luck next time...you lost ");
  }
  else {
    alert("Somehow- you tied!");
  }
}

playGame();

