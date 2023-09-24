const btnStart = document.querySelector(".start");
const btnReset = document.querySelector('.playAgain');
const playersBtns = document.querySelector('.options');
const scoreBoard = document.querySelector('.score');
const userPoints = document.querySelector('.userScore')
const computerPoints = document.querySelector('.computerScore')
let mainText = document.querySelector('.historyText')
let countRound = document.querySelector('.rounds')


btnStart.addEventListener('click', () => {
  btnStart.classList.toggle('hide');
  playersBtns.classList.toggle('hide');
  scoreBoard.classList.toggle('hide');
  btnReset.classList.toggle('hide');

  mainText.textContent = "Only you can save us, you must won 5 times"
})

btnReset.addEventListener('click', () => {
  btnStart.classList.toggle('hide');
  playersBtns.classList.toggle('hide');
  scoreBoard.classList.toggle('hide');
  btnReset.classList.toggle('hide');
  window.location.reload()
  mainText.innerHTML = 'The year is 2069 and only one thing can save the word...<br>You, armed with just your hands<br> you are the savior of humanity'
})

let userScore = 0;
let computerScore = 0;
let round = 0;
const choices = ["Rock", "Paper", "Sissor"];

function getComputerMove() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerMove, computerMove) {
  
  if((playerMove == "Rock" && computerMove == "Sissor") ||
  (playerMove == "Paper" && computerMove == "Rock") ||
  (playerMove == "Sissor" && computerMove == "Paper")) {
    userScore++
    userPoints.textContent = userScore

    round++
    countRound.textContent = round
    mainText.textContent = `You win: ${playerMove} beats ${computerMove}`
  }else if (playerMove == computerMove){
    mainText.textContent = `Tie game!`
  }else {
    computerScore++
    computerPoints.textContent = computerScore

    round++
    countRound.textContent = round
    mainText.textContent = `You loose: ${computerMove} beats ${playerMove}`
  }
}

const rpsButtons = document.querySelectorAll('svg')
rpsButtons.forEach(button => {
  button.addEventListener('click', e => {
    playerSelection = button.id
    computerSelection = getComputerMove()
    result = playRound(playerSelection, computerSelection)
    checkWinner(result)
  })
})

function checkWinner(result) {
  if(userScore >= 5) {
    mainText.textContent = "Congrats, you save us all"
    playersBtns.classList.toggle('hide');
    scoreBoard.classList.toggle('hide');

  }else if(computerScore >= 5) {
    mainText.textContent= "Ohhh no, we are fuck"
    playersBtns.classList.toggle('hide');
    scoreBoard.classList.toggle('hide');
  }
}


