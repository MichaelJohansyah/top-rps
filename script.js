let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
  if (humanSelection == "rock") {
    if (computerSelection == "paper") {
      console.log("you kalah woilah");
      computerScore++;
    } else if (computerSelection == "rock") {
      console.log("seri cuy");
    } else {
      console.log("you menang cuy");
      humanScore++;
    }
  } else if (humanSelection == "paper") {
    if (computerSelection == "paper") {
      console.log("seri cuy");
    } else if (computerSelection == "rock") {
      console.log("you menang cuy");
      humanScore++;
    } else {
      console.log("you kalah woilah");
      computerScore++;
    }
  } else {
    if (computerSelection == "scissors") {
      console.log("seri cuy");
    } else if (computerSelection == "rock") {
      console.log("you kalah woilah");
      computerScore++;
    } else {
      console.log("you menang cuy");
      humanScore++;
    }
  }
}

function getComputerChoice() {
  randomValue = Math.floor(Math.random() * 3);
  switch (randomValue) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("You pilih what? rock, paper ato scissors?");
  return humanChoice;
}

function playGame(times) {
  while (times != 0) {
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    console.log(
      `you pilih ${humanSelection} and computer pilih ${computerSelection}`
    );
    playRound(humanSelection, computerSelection);
    console.log(`you = ${humanScore}, computer = ${computerScore}`);
    times--;
  }
}

playGame(5);
