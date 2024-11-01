// Getting the computer choice
 function getComputerChoice(){
    return Math.floor(Math.random()*3)
 }
 let computer_choice = getComputerChoice();

 //For testing;
 //console.log(computer_choice);

 // Equating the random number to a choice
  if (computer_choice === 0){
    console.log ("Rock");
  }
  else if (computer_choice === 1){
    console.log ("Paper")
  }
  else {
    console.log ("scissors");
  }
  // Getting the user choice
  let user_choice =prompt("What will you play? Rock, Paper or Scissors:");
  function getHumanChoice(){
    return user_choice;
  }
  console.log(getHumanChoice());