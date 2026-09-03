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

//Game Function

//Play game function loops 5 times
function playGame() {
  // Score updates
  const updateHumanScore = document.querySelector('#humanScore');
  const updateComputerScore = document.querySelector('#computerScore');

  function updateScores(humanScore, computerScore) {
    updateHumanScore.textContent = humanScore;
    updateComputerScore.textContent = computerScore;
  }


  //Assign scores starting at 0
  let humanScore = 0;
  let computerScore = 0;


  // Get Human Choice
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');

  //Add event listeners for each button, when clicked
  rock.addEventListener('click', () => {
    humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });

  paper.addEventListener('click', () => {
    humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });

  scissors.addEventListener('click', () => {
    humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });

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

    console.log(humanScore);
    console.log(computerScore);

    // Determine winner
    if (humanScore == 5) {
      alert("Congratulations! you won ");
      humanScore = 0;
      computerScore = 0;
    }
    else if (computerScore == 5) {
      alert("Better luck next time...you lost ");
      humanScore = 0;
      computerScore = 0;
    }

    updateScores(humanScore, computerScore);
  }
}

playGame();


