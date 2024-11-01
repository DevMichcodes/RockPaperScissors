// Getting the computer choice
 function getComputerChoice(){
    return Math.floor(Math.random()*3)
 }
 let computer_choice = getComputerChoice();
 //console.log(computer_choice);

 // Equating the random number to a choice
  if (computer_choice === 0){
    console.log ("Rock");
  }
  else if (computer_choice === 1){
    console.log ("Paper")
  }
  else {
    console.log ("scissor");
  }
  