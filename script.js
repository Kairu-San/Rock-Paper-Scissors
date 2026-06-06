// Function to pick rps
function getComputerChoice() {
  // Pick a random number 1-3
  let randomNumber = Math.floor(Math.random() * 3) +1;
  console.log(randomNumber);
  return randomNumber;
}

//Assign to variable
 let choice = getComputerChoice();
  
  //If 1 Display Rock
  if (choice == 1) {
      console.log("Rock!");
  }
  //ElseIf 2 DisplayPaper
  else if (choice == 2) {
      console.log("Paper!")
      }
  //Else Display Scissors
  else {console.log("Scissors!")}


// Human choice function
  //Get user input 
  //Display what user chose
