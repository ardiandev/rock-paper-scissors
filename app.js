//Global variable
const choices = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

//Target Elements
const rockEl = document.querySelector(".rock");
const paperEl = document.querySelector(".paper");
const scissorsEl = document.querySelector(".scissors");

const playerPoint = document.querySelector(".player-score");
const compPoint = document.querySelector(".comp-score");

const display = document.querySelector(".info");

const infoDiv = document.querySelector(".info-div");

const playerInfo = document.querySelector(".player-choice");
const compInfo = document.querySelector(".comp-choice");

//Create element
const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart";
// restartBtn.setAttribute("style", "margin: 5px 0;");

function restartGame() {
  computerScore = 0;
  playerScore = 0;
  playerPoint.textContent = playerScore;
  compPoint.textContent = computerScore;
  restartBtn.remove();
  display.textContent = "Click your choice!";
  playerInfo.textContent = "";
  compInfo.textContent = "";
}

restartBtn.addEventListener("click", restartGame);

const playGame = e => {
  const compChoice = choices[Math.floor(Math.random() * choices.length)];
  const playerChoice = e.target.textContent;

  if (playerScore === 5 || computerScore === 5) {
    return;
  }

  playerInfo.textContent = playerChoice;
  compInfo.textContent = compChoice;

  if (playerChoice === compChoice) {
    display.textContent = "It's draw";
    return;
  }

  if (
    (playerChoice === "Rock" && compChoice === "Scissors") ||
    (playerChoice === "Paper" && compChoice === "Rock") ||
    (playerChoice === "Scissors" && compChoice === "Paper")
  ) {
    playerScore++;
    playerPoint.textContent = playerScore;
    display.textContent = `Player won!! ${playerChoice} beats ${compChoice}`;
  } else {
    computerScore++;
    compPoint.textContent = computerScore;
    display.textContent = `Computer won!! ${compChoice} beats ${playerChoice}`;
  }

  if (playerScore === 5) {
    display.textContent = "Game over!! Player win!!";
    infoDiv.appendChild(restartBtn);
  } else if (computerScore === 5) {
    display.textContent = "Game over!! Computer win!!";
    infoDiv.appendChild(restartBtn);
  }
};

rockEl.addEventListener("click", playGame);
paperEl.addEventListener("click", playGame);
scissorsEl.addEventListener("click", playGame);
