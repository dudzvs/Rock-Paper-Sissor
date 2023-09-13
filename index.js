let playerScore = 0;
let computerScore = 0;

// pick a random choice for the computer

function computerChoice() {
  let choices = ["Rock", "Paper", "Sissor"]

  return choices[Math.floor(Math.random() * choices.length)]
}

// play one round of the game Rock-Paper-Sissor

function playRound(playerSelection, computerSelection) {
  let result = ""
  computerSelection = computerChoice()

  if((playerSelection == "Rock" && computerSelection == "Sissor") || 
     (playerSelection == "Paper" && computerSelection == "Rock") || 
     (playerSelection == "Sissor" && computerSelection == "Paper")) {
      playerScore++;
      result = `Ohhh yeahh you get it my man\n ${playerSelection} beats ${computerSelection}\n player score: ${playerScore}\n computer score: ${computerScore}`
     }
     else if(computerSelection == playerSelection) {
      result = "It's a tie game my man, try over"
     }
     else if(playerSelection === "") {
      result = "wrong"
     }
     else {
      computerScore++;
      result = `Ohhh FUCK\n ${computerSelection} beats ${playerSelection}\n player score: ${playerScore}\n computer score: ${computerScore}`
     }
     console.log(result)
     return result
}

// function for the player to play 5 times, and see who won

function game(playerSelect) {

  for(let i = 0; i < 5; i++) {   
    playerSelect = prompt("Rock, Paper or Sissor ?")
    playerSelect = capitalize(playerSelect)
    playRound(playerSelect)
  }
  
  if(playerScore > computerScore) {
    console.log("Congrats you won!!")
  }else if (computerScore > playerScore) {
    console.log("FUCKKKKKKK")
  }else {
    console.log("Tie game")
  }

}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
game()