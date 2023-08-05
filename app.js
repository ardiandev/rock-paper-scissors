const choices = ["rock", "paper", "scissors"];
let playerScore = 0;

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
}

function playRound(round) {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  const display = displayResult(playerChoice, computerChoice, winner, round);
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  let input = prompt("Type rock, paper, or scissors.");
  while (input === null) {
    input = prompt(
      "Please type your choice. Make sure the spelling is correct."
    );
  }

  input = input.toLocaleLowerCase();
  let check = validateInput(input);

  while (check === false) {
    input = prompt("Check your spelling!");

    while (input === null) {
      input = prompt(
        "Please type your choice. Make sure the spelling is correct."
      );
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function validateInput(playerInput) {
  return choices.includes(playerInput);
}

function displayResult(player, computer, winner, round) {
  console.log(`Round ${round}`);
  console.log(`Player: ${player}`);
  console.log(`Computer: ${computer}`);
  if (winner !== "Draw") {
    return console.log(`The winner is ${winner}. `);
  }
  return console.log("It is Draw");
}

function getWinner(player, computer) {
  if (player === computer) {
    return "Draw";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "Player";
  }
  return "Computer";
}

game();
